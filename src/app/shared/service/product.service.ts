import { Injectable } from '@angular/core';
import { IprodRes, Iproduct } from '../model/Iproduct';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  productArray: Iproduct[] = [
    {
      id: 101,
      productName: 'Laptop',
      price: 55000,
      category: 'Electronics',
      description: 'High-performance laptop for work and study',
    },
    {
      id: 102,
      productName: 'Smartphone',
      price: 25000,
      category: 'Electronics',
      description: 'Android smartphone with a powerful camera',
    },
    {
      id: 103,
      productName: 'Headphones',
      price: 2500,
      category: 'Electronics',
      description: 'Wireless headphones with clear sound',
    },
    {
      id: 104,
      productName: 'Running Shoes',
      price: 3500,
      category: 'Footwear',
      description: 'Comfortable shoes for running and exercise',
    },
    {
      id: 105,
      productName: 'T-Shirt',
      price: 999,
      category: 'Clothing',
      description: 'Cotton casual T-shirt for everyday use',
    },
  ];

  fetchAll(): Observable<Iproduct[]> {
    return of(this.productArray);
  }


emiteditSub$:Subject<Iproduct> = new Subject<Iproduct>();

 onEditProduct(editObj:Iproduct){
      this.emiteditSub$.next(editObj);

 }



 onUPdateProduct(updateObj:Iproduct): Observable<IprodRes<Iproduct>>{

        let getIndex = this.productArray.findIndex(ele=>ele.id===updateObj.id);
       this.productArray[getIndex]= updateObj
         return of({
                msg:'Updated successfully',
                data:updateObj
         })
 }

}
