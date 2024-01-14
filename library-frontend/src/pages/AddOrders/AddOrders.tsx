import "./AddOrder.css"
import { useAllClientData } from "../../hooks/useClientData/useClientDataGet"
import { useAllBookData } from "../../hooks/useBookData/useBookDataGet"
import { useEffect, useState } from "react";
import { clientData } from "../../interface/clientData";
import { SiWhatsapp } from "react-icons/si";
import { bookData } from "../../interface/bookData";
import { bookDTO } from "../../interface/bookDTO";
import { useOrderDataMutate } from "../../hooks/useOrderData/useOrderDataPost";
import { OrderData } from "../../interface/OrderData";

interface cardBookOrder {
    book: bookData,
    handleQuantity: any
}

export function CardBookOrder({ book, handleQuantity }: cardBookOrder) {

    const [quantity, setQuantity] = useState(1);

    const increment = (e: any) => {
        if (quantity < book.quantity) {
            setQuantity(quantity + 1)
            handleQuantity(quantity + 1)
            e.preventDefault();
        } else {
            e.preventDefault();
        }

    }

    const decreases = (e: any) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            handleQuantity(quantity - 1)
            e.preventDefault();
        } else {
            e.preventDefault();
        }

    }


    useEffect(() => {
        handleQuantity(quantity);
    }, []);


    return (
        <>
            <div className="cardBookOrderConteiner">
                <span className="CardBookOrderTitle">
                    <p>{book.title} ({book.condition})</p>
                </span>
                <span className="quantity-span">
                    <input type="number" name="bookQuantity" id="bookQuantity" value={quantity} />
                </span>

                <button onClick={increment} id="QuantityIncrement">+</button>
                <button onClick={decreases} id="QuantityDecreases">-</button>
            </div>

        </>
    )
}



export function AddOrders() {

    const { dataClient } = useAllClientData()
    const [selectedClient, setSelectedClient] = useState<clientData | null>(null);
    const [state, SetState] = useState("")

    const { dataBook } = useAllBookData()
    const [selectedBooks, setSelectedBooks] = useState<any>([])
    const [selectedBooksDto, setSelectedBooksDto] = useState<any>([])

    const { mutate } = useOrderDataMutate()

    const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedClientData = dataClient && dataClient[selectedIndex];
        setSelectedClient(selectedClientData || null);
    };

    const handleBooks = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedBooksData = dataBook && dataBook[selectedIndex];
        if (!selectedBooks.includes(selectedBooksData)) {
            setSelectedBooks([...selectedBooks, selectedBooksData])
        } else {
            alert("Este livro ja está no pedido!")
        }


    };

    const handleBooksDto = (book: bookData, quantity: number) => {
        const id = book.id
        const title = book.title
        const author = book.author
        const condition = book.condition
        const price = book.price
        const totalPrice = book.price * quantity

        const existingBookIndex = selectedBooksDto.findIndex((item: bookDTO) => item.id === id);
        if (existingBookIndex !== -1) {
            selectedBooksDto.splice(existingBookIndex, 1)
        }

        const selectedBooksDataDto: bookDTO = {
            id,
            title,
            author,
            condition,
            price,
            quantity,
            totalPrice,
        }

        setSelectedBooksDto([...selectedBooksDto, selectedBooksDataDto])
    }

    const submit = () => {
        if (selectedBooksDto[0] != null && selectedClient) {
            const date0 = new Date();
            const day = String(date0.getDate()).padStart(2, '0');
            const month = String(date0.getMonth() + 1).padStart(2, '0');
            const year = date0.getFullYear();
            const date = `${day}/${month}/${year}`;

            const OrderData: OrderData = {
                date,
                client: {
                    id: selectedClient?.id,
                    name: selectedClient?.name,
                    number: selectedClient?.number,
                    city: selectedClient?.city,
                    nbh: selectedClient?.nbh,
                    street: selectedClient?.street,
                    hn: selectedClient?.hn
                },
                books: selectedBooksDto,
                orderStatus: state

            }

            mutate(OrderData)
        } else {
            alert("Pedido não foi criado devido a ausência de livros")
        }
    }


    return (
        <>
            <div className='add-container'>
                <div className="add-title"><h1>Adicionar pedido</h1></div>
                <form className="order-input-container">
                    <div className="order-selects">

                        <select name="clients-select"
                            id="clients-select"
                            onChange={handleClient}>
                            <option value="" disabled selected hidden id='placeHolderOpt'>selecione o comprador</option>

                            {dataClient && dataClient?.map((e, index) => (
                                <option key={index} value={e.name}> {e.name}
                                </option>))
                            }
                        </select>

                        <select name="books-select"
                            id="books-select"
                            onChange={handleBooks}>
                            <option value="" disabled selected hidden id='placeHolderOpt'>selecione os livros</option>

                            {dataBook && dataBook?.map((e, index) => {
                                const value = `${e.title} ${e.condition}`
                                if (e.quantity > 0) {
                                    return <option key={index} value={value} >{e.title} ({e.condition})</option>
                                } else {
                                    return <option key={index} value={value} disabled >{e.title} ({e.condition})</option>
                                }

                            })}
                        </select>

                        <select name="state-select"
                            id="state-select"
                            onChange={(e) => { SetState(e.target.value) }}>

                            <option value="" disabled selected hidden id='placeHolderOpt'>Selecione o estado prévio do pedido </option>
                            <option value="WAITING_PAYMENT">Esperando pagamento</option>
                            <option value="SHIPPED">Enviado</option>
                            <option value="DELIVERED">Entregue</option>
                            <option value="CANCELED">Cancelado</option>

                        </select>

                    </div>
                    <div className="infos-orderadd">
                        <div className="info-client-orderadd">
                            <p id="client-name-order">{selectedClient?.name}</p>
                            <p id="client-number-order">
                                {selectedClient?.number && (
                                    <>
                                        <SiWhatsapp /> {selectedClient?.number}
                                    </>
                                )}

                            </p>
                            <p id="client-city-order">
                                {selectedClient?.city && (
                                    <>
                                        {selectedClient.city}, {selectedClient?.nbh}
                                    </>
                                )}
                            </p>
                            <p id="client-street-order">
                                {selectedClient?.street && (
                                    <>
                                        {selectedClient.street}, {selectedClient?.hn}
                                    </>
                                )}
                            </p>

                        </div>
                        <div className="info-books-orderadd">
                            {selectedBooks?.map((e: any) => <CardBookOrder book={e} handleQuantity={(quantity: number) => handleBooksDto(e, quantity)} />)}
                        </div>
                    </div>
                    {selectedClient &&
                        <div className="btn-order-container">
                            <button id="submit-order-btn" onClick={submit}>Adicionar pedido</button>
                        </div>}

                </form>
            </div>

        </>
    )
}