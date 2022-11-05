import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = [];
  categories:any[] = [];
  loading:boolean = false;
  p:any = 1;


  constructor(private _ProductsService:ProductsService) { 
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllProducts(){
    this.loading = true;
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res.products;
        this.loading = false;
      }, error:(err)=>{
        this.loading = false;
        alert(err.message);
      }
    })
  }

  getAllCategories(){
    this.loading = true;
    this._ProductsService.getAllCategories().subscribe({
      next:(res)=>{
        this.categories = res;
        this.loading = false;
      }, error:(err)=>{
        this.loading = false;
        alert(err.message);
      }
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    (value == "All") ? this.getAllProducts() : this.getProductsCategory(value);
  }

  getProductsCategory(key:string){
    this.loading = true;
    this._ProductsService.getProductsOfCategory(key).subscribe({
      next:(res)=>{
        this.loading = false;
        this.products = res.products;
      }
    })
  }

}
