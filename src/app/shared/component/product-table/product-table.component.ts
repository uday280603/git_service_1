import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/Iproduct';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  getAllProducts!: Iproduct[];
@Output() emitEditObj :EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
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
  onEditProduct(product:Iproduct){
      //  this.emitEditObj.emit(product);

     this._productService.onEditProduct(product);
      }

}
