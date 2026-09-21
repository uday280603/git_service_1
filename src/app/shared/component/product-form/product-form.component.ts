import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Iproduct } from '../../model/Iproduct';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm!:NgForm

  IsinEditMode: boolean = false;

  constructor(
    private _prodectservice: ProductService,
  ) {}
  ngOnInit(): void {
  }

  onCreateProd() {
    if (this.productForm.valid) {
      const newObj: Iproduct = {
        ...this.productForm.value,
        Id: Date.now()
      };

      this._prodectservice.onCreate(newObj)
        .subscribe({
          next: res => {
            this.productForm.reset();
            console.log(res.msg);
          },
          error: err => {
            console.log(err);
          }
        });
    }
  }
}
