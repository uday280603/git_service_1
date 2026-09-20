export interface Iproduct{
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;
    
}
export interface Ires{
    msg:string,
    obj:Iproduct
}