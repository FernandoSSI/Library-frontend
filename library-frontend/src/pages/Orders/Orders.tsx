import { OrderCard } from "../../components/cards/OrderCard/OrderCard";
import { useOrderData } from "../../hooks/useOrderData/useOrderDataGet"
import "./Orders.css"

export function Orders() {
    const { data } = useOrderData();


    return (
        <>
            <div className='body-container-orders'>
                <div className="orders-container">
                    <div className="orders-title">
                        <h1>Pedidos</h1>
                        </div>
                        <div className="card-grid-order">
                            {data && data.map(e =>
                                <OrderCard date={e.date} client={e.client} books={e.books} totalPrice={e.totalPrice} />)}
                        </div>
                    
                </div>
            </div>
        </>
    )
}