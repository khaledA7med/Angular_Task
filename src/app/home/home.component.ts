import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[] = [];
  loading:boolean = false;

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.getHomeProducts();
  }

  getHomeProducts(){
    this.loading = true;
    this._ProductsService.getHomeProducts(6,0).subscribe({
      next:(res)=>{
        this.products = res.products;
        this.loading = false;
      }, error:(err)=>{
        this.loading = false;
        alert(err.message);
      }
    })
  }

}
