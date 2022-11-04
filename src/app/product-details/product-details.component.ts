import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string = '';
  data:any = {};
  loading:boolean = false;
  constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute) {
   }

  ngOnInit(): void {
    
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.loading = true;
    this._ProductsService.getProductById(this.id).subscribe({
        next:(res)=>{
          this.loading = false;
          this.data = res;
        },
        error: err =>{
          this.loading = false;
          alert(err);
        }
      })
    }  
  }
  
