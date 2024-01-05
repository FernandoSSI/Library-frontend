import { bookDTO } from "./bookDTO";

export interface OrderData {
    id?: any;
    date: string;
    client: {
        id?: any;
        name?: string;
        number?: number;
        city?: string,
        street?: string,
        nbh?: string,
        hn?: number
    };
    books: bookDTO[];
    totalPrice?: number;
}