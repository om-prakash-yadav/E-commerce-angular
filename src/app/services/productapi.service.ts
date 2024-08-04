import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  url="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }
  Products(){
    return this.http.get(this.url);
  }
  
}
