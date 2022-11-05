import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getProducts():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products`)
  }

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products`)
  }

  getHomeProducts(limit:number, skip:number):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products/categories`)
  }

  getProductsOfCategory(key:string):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products/category/`+ key)
  }

  getProductById(id:any):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products/${id}`)
  }

  deleteProduct(id:any):Observable<any>{
    return this._HttpClient.delete(`https://dummyjson.com/products/${id}`)
  }

  addProduct(add:any):Observable<any>{
    return this._HttpClient.post(`https://dummyjson.com/products/add`, add)
  }
  updateProduct(id:any ,item:any):Observable<any>{
    return this._HttpClient.put(`https://dummyjson.com/products/${id}`, item).pipe(map(obj => obj))
  }
}
