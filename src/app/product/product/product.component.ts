import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  id:any;
  data:any = {};
  total:number = 0;
  products:any[] = [];
  p:any = 1;
  form!:FormGroup;
  constructor(private _ProductsService:ProductsService, private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this._FormBuilder.group({
      title: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
    this.getAllProducts();
  }

  getAllProducts(){
    this._ProductsService.getProducts().subscribe({
      next:(res)=>{
        this.products = res.products;
      }, error:(err)=>{
        alert(err.message);
      }
    })
  }

  addproduct(){
    const add = this.form.value;
    this._ProductsService.addProduct(add).subscribe({
      next: ()=>{
        this.form.reset();
        alert('Added Successfully');
      }
    })
  }

  updateProduct(item:any){
    this._ProductsService.updateProduct(item.id, item ).subscribe({
      next:()=>{
        this.success();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  success(){
    alert('updated success!')
  }

}
