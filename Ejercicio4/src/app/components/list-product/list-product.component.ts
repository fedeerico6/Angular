import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input()
  productList: Array<Product> = [];
  constructor() { }

  ngOnInit() {
  }
  deleteProduct(id:number){
    let cont: number = 0;
    let indice: number = null;
    this.productList.forEach(p => {
      if (p.id == id) {
        indice = cont;
      }
      cont++;
    })
    if (indice != null) {
      this.productList.splice(indice,1);
    }
  }
}
