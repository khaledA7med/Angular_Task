import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:any[] = [];
  total:number = 0;
  done:boolean = false;

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();
  }
  

  plusAmount(index:number){
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  minusAmount(index:number){
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  detectChange(){
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  deleteProduct(index:number){
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  clearCart(){
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  getCartTotal(){
    this.total = 0;
    for( let x in this.cartProducts){
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addCart(){
    let products = this.cartProducts.map(item =>{
      return {id:item.item.id, quantity:item.quantity};
    })
    let model = {
      userId: 1,
      products: products
    }
    this._ProductsService.createNewCart(model).subscribe({
      next:()=>{
        this.done = true;
      }
    })
  }
}
