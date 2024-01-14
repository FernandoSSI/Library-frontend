import { useState } from "react";
import { bookDTO } from "../../../interface/bookDTO";
import "./OrderCard.css"
import { useOrderDataDelete } from "../../../hooks/useOrderData/useOrderDataDelete";
import { EditOrder } from "../../editCard/EditOrder";

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

export function OrderCard({ id, date, client, books, totalPrice, orderStatus }: OrderCardProps) {

    const [selected, setSelected] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleSelected = () => {
        if (selected) {
            setSelected(false)
        } else {
            setSelected(true)
        }
    }

    const {mutate} = useOrderDataDelete()

    const del = () => {
        const conf = confirm("Deseja Realmente excluir este pedido?")
        if (conf == true) {
            mutate(id)
            close()
        }
    }

    const openEdit = () => {
        setEdit(prev => !prev)
        
    }

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

            <div className="order-card-container" onClick={handleSelected}>
                <span className="cardO-date"><p>{date}</p></span>
                <span className="cardO-name"><p>{client.name}</p></span>
                <span className="cardO-number"><p>{client.number}</p></span>
                <span className="cardO-books">
                    {books.map(e => <p>  {e.quantity} {e.title} </p>)}
                </span>
                <span className="cardO-price"><p>R$ {totalPrice}</p></span>
                <span className="cardO-state"><p> {orderStatus}</p></span>
            </div>
            {selected &&
                <div className='card-options'>
                    <button className='editClient-btn' onClick={openEdit}>Editar</button>
                    <button className='delClient-btn' onClick={del}>Excluir</button>
                </div>
            }

            {edit &&
                <EditOrder idProp={id} dateProp={date} clientProp={client} booksProp={books} close={openEdit}  orderStatusProp={orderStatus}/>}
        </>
    )
}