import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/Iproduct';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  getAllProducts!: Iproduct[];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._productService.fetchAll().subscribe({
      next: (data) => {
        this.getAllProducts = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
