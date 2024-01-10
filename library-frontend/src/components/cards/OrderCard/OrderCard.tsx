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
    orderStatus: string;
}

export function OrderCard({ date, client, books, totalPrice, orderStatus }: OrderCardProps) {
    switch (orderStatus) {
        case 'WAITING_PAYMENT':
            orderStatus = "Esperando pagamento"
            break
        case 'PAID':
            orderStatus = "Pedido pago"
            break
        case 'SHIPPED':
            orderStatus = "Pedido enviado"
            break
        case 'DELIVERED':
            orderStatus = "Pedido entregue"
            break
        case 'CANCELED':
            orderStatus = "Pedido cancelado"
            break
    }

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
                <span className="cardO-state"><p> {orderStatus}</p></span>
            </div>
        </>
    )
}