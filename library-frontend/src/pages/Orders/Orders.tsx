import { useEffect, useState } from "react";
import { OrderCard } from "../../components/cards/OrderCard/OrderCard";
import { useOrderDataGet } from "../../hooks/useOrderData/useOrderDataGet"
import "./Orders.css"
import { Pagination } from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";

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
                    <div className="search-bar">
                        <div className="add-button">
                            <Link to={"/addorders"}><GoPlus /></Link>
                        </div>
                        <input type="search" name="search-bar" id="bar" onChange={(e: any) => setSearch(e.target.value)} placeholder="Procure por titulos, ou clientes" />
                    </div>

                    <div className="orders-properties-container">
                        <span className="order-properties" id='dateOrder-property'><p>data</p></span>
                        <span className="order-properties" id='nameOrder-property'><p>cliente</p></span>
                        <span className="order-properties" id='numberOrder-property'><p>número</p></span>
                        <span className="order-properties" id='booksOrder-property'><p>livros</p></span>
                        <span className="order-properties" id='valueOrder-property'><p>valor total</p></span>
                        <span className="order-properties" id='paymentOrder-property'><p>status</p></span>
                    </div>
                    <div className="card-grid-order">
                        {data && data?.content.map((e: any) =>
                            <OrderCard id={e.id} date={e.date} client={e.client} books={e.books} totalPrice={e.totalPrice} orderStatus={e.orderStatus} />)}
                    </div>
                </div>
                <Pagination totalPages={totalPages} changePage={handlePage} currentPage={page + 1} />
            </div>
        </>
    )
}