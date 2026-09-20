import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/Iproduct';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  getAllProducts!: Iproduct[];

  constructor(
    private _productService: ProductService,
    private snackbar:SnackbarService
  ) {}

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

  onRemove(id:number){
    let getconfirm = confirm(`Are You Sure You Want To Remove With Id ${id}?`)
    if(getconfirm){
      this._productService.RemoveProductById(id)
        .subscribe({
          next:res=>{
            this.snackbar.opensanckbar(res.msg)
          }
        })
    }
  }

}
