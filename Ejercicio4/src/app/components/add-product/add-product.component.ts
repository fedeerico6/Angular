import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id: number;
  name: string;
  description: string;
  price: number;
  @Input()
  productList: Array<Product> = [];

  constructor() { }

  ngOnInit() {
  }

  add() {
    let exsiste: boolean = false;
    let exsiste2: boolean = false;
    let product = new Product(this.id, this.name, this.description, this.price);
    this.productList.forEach(p => {
     if (p.id == product.id) {
       exsiste = true;
     }
      if (exsiste){
        exsiste2 = true;
      }
    })
    if (!exsiste) {
      this.productList.push(product);
    } else {
      alert("Ya exsiste un producto con ese id");
    }
    
  }

}
