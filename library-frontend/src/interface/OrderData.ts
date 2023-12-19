import { bookDTO } from "./bookDTO";

export interface OrderData{
    id?:any;
    date: string;
    client:{
        id?:any;
        name:string;
        number:number;
    };
    books: bookDTO[];
    totalPrice:number;
}