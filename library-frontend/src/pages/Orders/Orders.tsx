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
                    <div className="orders-properties-container">
                        <span className="order-properties" id='dateOrder-property'><p>data</p></span>
                        <span className="order-properties" id='nameOrder-property'><p>cliente</p></span>
                        <span className="order-properties" id='numberOrder-property'><p>número</p></span>
                        <span className="order-properties" id='booksOrder-property'><p>livros</p></span>
                        <span className="order-properties" id='valueOrder-property'><p>valor total</p></span>
                        <span className="order-properties" id='paymentOrder-property'><p>pagamento</p></span>
                    </div>
                    <div className="card-grid-order">
                        {data && data.map((e:any) =>
                            <OrderCard date={e.date} client={e.client} books={e.books} totalPrice={e.totalPrice} />)}
                    </div>

                </div>
            </div>
        </>
    )
}