import { Component } from '@angular/core';
import { ProductapiService } from '../services/productapi.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:any;

  constructor(private productsdata:ProductapiService){
    productsdata.Products().subscribe((data)=>{
      console.warn(data);
      this.products=data;
  });
  }

  AddToCart(product:any){
      
  }
}
