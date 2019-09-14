import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio4';
  products = [];
  cart = [];

  constructor() {
    let product1 = new Product(1,"Televisor","Led 43 pulgadas",4441);
    let product2 = new Product(2,"Celular","Iphone 11",21121);
    let product3 = new Product(3,"Computadora","i5 de octava",21121);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
  }

  setProductToCart(product) {
    this.cart.push(product);
  }

  
}
