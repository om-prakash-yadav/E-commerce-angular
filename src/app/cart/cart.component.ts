import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items:any) => {
      this.cartItems = items;
    });
    console.log(this.cartItems);
  }

  removeFromCart(product:any): void {
    this.cartService.removeFromCart(product);
  }

}
