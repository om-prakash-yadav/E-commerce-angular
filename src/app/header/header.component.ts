import {  ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navbarOpen = false;

  @Input() isLoggedIn: any;
  @Input() username: any;

  logout() {
    this.auth.logOut();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  cartItems: any = [];

  constructor(private cartService: CartService, private auth: AuthService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any) => {
      this.cartItems = items;
    });

  }
}
