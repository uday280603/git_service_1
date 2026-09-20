export interface Iproduct{
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;
    
}

export interface Ires<T>{
    msg:string,
    Obj:T
}