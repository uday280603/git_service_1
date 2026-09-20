export interface Iproduct{
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;

}

export interface IprodRes<T>{
           msg:string,
           data:T
}
