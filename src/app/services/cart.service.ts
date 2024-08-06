import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any = [];
  private cartItemsSubject = new BehaviorSubject<any>(this.cartItems);
 

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  

  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
    }
  }
}

