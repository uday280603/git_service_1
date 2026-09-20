import { IOType } from 'child_process';
export interface Iproduct{
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;

}

export interface IproductRes {
  msg : string,
  obj : Iproduct
}
