export interface Iproduct{
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;
    
}

export interface IproductRes<T> {
  msg: string;
  obj: T;
}