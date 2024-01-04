import "./AddOrder.css"
import { useAllClientData } from "../../hooks/useClientData/useClientDataGet"
import { useAllBookData } from "../../hooks/useBookData/useBookDataGet"
import { useState } from "react";
import { clientData } from "../../interface/clientData";
import { SiWhatsapp } from "react-icons/si";
import { bookData } from "../../interface/bookData";

interface cardBookOrder {
    book: bookData,
    handleQuantity: any
}

export function CardBookOrder({ book, handleQuantity }: cardBookOrder) {

    const [quantity, setQuantity] = useState(1);

    const increment = (e: any) => {
        if (quantity < book.quantity) {
            setQuantity(quantity + 1)
            e.preventDefault();
        } else {
            e.preventDefault();
        }

    }

    const decreases = (e: any) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            e.preventDefault();
        } else {
            e.preventDefault();
        }

    }

    return (
        <>
            <div className="cardBookOrderConteiner">
                <span className="CardBookOrderTitle">
                    <p>{book.title}</p>
                </span>

                <input type="number" name="bookQuantity" id="bookQuantity" value={quantity} />
                <button onClick={increment} id="QuantityIncrement">+</button>
                <button onClick={decreases} id="QuantityDecreases">-</button>
            </div>

        </>
    )
}

export function AddOrders() {

    const { dataClient } = useAllClientData()
    const { dataBook } = useAllBookData()
    const [selectedClient, setSelectedClient] = useState<clientData | null>(null);
    const [selectedBooks, setSelectedBooks] = useState<any>([])
    const [selectedBooksDto, setSelectedBooksDto] = useState<any>([])

    const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedClientData = dataClient && dataClient[selectedIndex];
        setSelectedClient(selectedClientData || null);
    };

    const handleBooks = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedBooksData = dataBook && dataBook[selectedIndex];
        setSelectedBooks([...selectedBooks, selectedBooksData])

    };

    const handleBooksDto = (book: bookData, quantity: number) => {
        const selectedBooksDataDto = {
            id: book.id,
            title: book.title,
            author: book.author,
            condition: book.condition,
            price: book.price,
            quantity: book.quantity,
        }
        setSelectedBooksDto([...selectedBooksDto, selectedBooksDataDto])
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

                            {dataBook && dataBook?.map((e, index) => <option key={index} value={e.title}>{e.title}</option>)}
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
                            {selectedBooks?.map((e: any) => <CardBookOrder book={e} handleQuantity={() => { }} />)}
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}