import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  Products!:Product[];
  url="http://localhost:3000/"
  getAllProducts(){
    return this.http.get<Product[]>(this.url+"products");
  };
}
