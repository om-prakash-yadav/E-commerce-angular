import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any = [];
  totalPrice:any=0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items:any) => {
      this.cartItems = items;
      this.totalPrice=items.reduce((sum:any,curr:any)=>sum+parseInt(curr.price),0);
    });
    console.log(this.cartItems);
    console.log(this.totalPrice);
  }

  removeFromCart(product:any): void {
    this.cartService.removeFromCart(product);
    this.totalPrice=this.cartItems.reduce((sum:any,curr:any)=>sum+parseInt(curr.price),0);
    console.log(this.totalPrice);
  }

}
