import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/Iproduct';
import { NgForm } from '@angular/forms';
import { SnackbarServiceService } from 'src/app/snackbar-service.service';
import { error } from 'console';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm!:NgForm;
  isInEditMode:boolean=false;

  constructor(private productService: ProductService, private snackbar:SnackbarServiceService) { }

  ngOnInit(): void {
  }



  onSubmit() {
    if (this.productForm.valid) {
      const newObj = { ...this.productForm.form.value, id: crypto.randomUUID() };
      this.productService.createProduct(newObj)
        .subscribe({
          next:res=>{
            this.snackbar.sanckbar(res.msg);
            this.productForm.reset();
          },
          error:err=>{
            console.log(err);
          }
        })
    }
  }
  onUpdate(){

  }
}
