import { bookDTO } from "../../../interface/bookDTO";
import "./OrderCard.css"

interface OrderCardProps {
    id?: any;
    date: string;
    client: {
        id?: any;
        name: string;
        number: number;
    };
    books: bookDTO[];
    totalPrice: number;
}

export function OrderCard({ date, client, books, totalPrice }: OrderCardProps) {

    return (
        <>
            
            <div className="order-card-container">
                <span className="cardO-date"><p>{date}</p></span>
                <span className="cardO-name"><p>{client.name}</p></span>
                <span className="cardO-number"><p>{client.number}</p></span>
                <span className="cardO-books">
                    {books.map(e => <p>  {e.quantity} {e.title} </p>)}
                </span>
                <span className="cardO-price"><p>R$ {totalPrice}</p></span>
                <span className="cardO-state"><p> Estado</p></span>
            </div>
        </>
    )
}