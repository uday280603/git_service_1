import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct } from '../../model/Iproduct';
import { ProductService } from '../../service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{

  constructor(private _prodService:ProductService, private _snackbar:MatSnackBar) { }
 @ViewChild('productForm') productForm!:NgForm;
//  @Input()  emiteditObj!:Iproduct;

 IsInEditMode:boolean = false ;
 editObj!:Iproduct ;

//  ngOnChanges(changes: SimpleChanges): void {
//    this.editObj =changes['emiteditObj']['currentValue'];
//   if(this.editObj){
//      this.IsInEditMode =true ;
//         this.productForm.form.patchValue(this.emiteditObj);
//       }
//  }

  ngOnInit(): void {

     this._prodService.emiteditSub$
             .subscribe({
                   next:res=>{
                        this.editObj = res ;
                         this.productForm.form.patchValue(this.editObj);
                         this.IsInEditMode = true;
                   } ,
                   error:err=>{
                      console.log(err);
                   }
             })

  }



  onUpdate(){
        let updateId = this.editObj.id;

        let updateObj ={
              ...this.productForm.form.value,
                 id:updateId
         }
       this._prodService.onUPdateProduct(updateObj)
             .subscribe({
                next:res=>{
                    this._snackbar.open(res.msg,'close',{  duration:3000})

                    this.IsInEditMode = false ;
                    this.productForm.reset();
                },
                error:err=>{
                    console.log()//
                }
             })

  }
}
