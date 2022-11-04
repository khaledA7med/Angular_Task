import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products`)
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
}
