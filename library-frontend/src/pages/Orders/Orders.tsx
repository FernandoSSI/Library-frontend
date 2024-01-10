import { useEffect, useState } from "react";
import { OrderCard } from "../../components/cards/OrderCard/OrderCard";
import { useAllOrderData, useOrderDataGet } from "../../hooks/useOrderData/useOrderDataGet"
import "./Orders.css"
import { Pagination } from "../../components/Pagination/Pagination";

export function Orders() {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const { data } = useOrderDataGet(search, page)
    const [totalPages, setTotalPages] = useState(data?.totalPages)

    useEffect(() => {
        setTotalPages(data?.totalPages)
    }, [data])

    const handlePage = (e: number) => {
        setPage(e - 1);
    }


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
                        {data && data?.content.map((e:any) =>
                            <OrderCard date={e.date} client={e.client} books={e.books} totalPrice={e.totalPrice} />)}
                    </div>
                </div>
                <Pagination totalPages={totalPages} changePage={handlePage} currentPage={page + 1}/>
            </div>
        </>
    )
}