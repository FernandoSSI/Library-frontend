import { useOrderData } from "../../hooks/useOrderData/useOrderDataGet"
import "./Orders.css"

export function Orders() {
    const {data} = useOrderData();


    return (
        <>
            <div className="orders-container">
                <div className="orders-title">
                    <h1>Pedidos</h1>
                    {data && data?.map(e=> <p>{e.id}</p>)}
                </div>
            </div>
        </>
    )
}