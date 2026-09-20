import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { NgForm } from '@angular/forms';
import { Iproduct } from '../../model/Iproduct';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  IsinEditMode: boolean = false;
  constructor(
    private _productSer: ProductService,
    private _snackbar: SnackbarService,
  ) {}

  @ViewChild('productForm') productForm!: NgForm;

  editObj!: Iproduct;

  ngOnInit(): void {
    this._productSer.editProductSubject$.subscribe({
      next: (res) => {
        this.IsinEditMode = true;
        this.editObj = res;
        this.productForm.form.patchValue(res);
      },
    });
  }

  updateProduct() {
    let updateObj: Iproduct = {
      ...this.productForm.value,
      id: this.editObj.id,
    };

    this._productSer.updateProduct(updateObj).subscribe({
      next: (res) => {
        this.IsinEditMode = false;
        this.productForm.reset();
        this._snackbar.snackbar(res.msg);
      },
    });
  }
}
