import { useEffect, useState } from 'react';
import { useAllClientData } from '../../hooks/useClientData/useClientDataGet';
import { bookDTO } from '../../interface/bookDTO'
import { clientData } from '../../interface/clientData'
import './EditOrder.css'
import { useAllBookData } from '../../hooks/useBookData/useBookDataGet';
import { bookData } from '../../interface/bookData';
import { CardBookOrder } from '../../pages/AddOrders/AddOrders';
import { OrderData } from '../../interface/OrderData';
import { useOrderDataPut } from '../../hooks/useOrderData/useOrderDataPut';

interface EditCardProps {
    close: any,
    idProp: string,
    dateProp: string,
    booksProp: bookDTO[],
    clientProp: {
        id?: any;
        name: string;
        number: number;
    };
    orderStatusProp: string,
}

export function EditOrder({ close, idProp, dateProp, booksProp, clientProp, orderStatusProp }: EditCardProps) {


    const { dataClient } = useAllClientData()
    const { dataBook } = useAllBookData()

    function getClientIndex(clientId: any) {
        const index = dataClient?.findIndex(client => client.id === clientId);
        return index !== -1 ? index : null;
    }

    const prevClientIndex = getClientIndex(clientProp.id)
    const [selectedClient, setSelectedClient] = useState<clientData | any>(dataClient && prevClientIndex && dataClient[prevClientIndex]);

    const [selectedBooks, setSelectedBooks] = useState<any>([]);

    booksProp.map((bookDto: bookDTO) => {
        const idDTO = bookDto.id
        dataBook?.map((book: bookData) => {
            const id = book.id
            if (idDTO === id) {
                if (!selectedBooks.includes(book)) {
                    selectedBooks.push(book)
                }

            }
        })
    })



    const [selectedBooksDto, setSelectedBooksDto] = useState<any>([])

    const [orderStatus, setOrderStatus] = useState(orderStatusProp)

    const { mutate } = useOrderDataPut()

    useEffect(() => {
        // Verifica se os dados do cliente estão disponíveis antes de definir o estado
        if (dataClient && dataClient.length > 0) {
            const initialClientIndex = getClientIndex(clientProp.id);
            if (initialClientIndex !== null && initialClientIndex !== undefined) {
                const initialClientData = dataClient[initialClientIndex] || null;
                setSelectedClient(initialClientData);
            }
        }
    }, [dataClient, clientProp.id]);

    const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedClientData = dataClient && dataClient[selectedIndex];
        setSelectedClient(selectedClientData || null);
    };

    const handleBooks = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedBooksData = dataBook && dataBook[selectedIndex];
        if (selectedBooksData) {

            setSelectedBooks((prevSelectedBooks: any) => {
                const isBookAlreadySelected = prevSelectedBooks.some((book: bookDTO) => book.id === selectedBooksData.id);

                if (!isBookAlreadySelected) {
                    return [...prevSelectedBooks, selectedBooksData];
                } else {
                    alert("Este livro já está no pedido!");
                    return prevSelectedBooks;
                }
            });
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

        selectedBooksDto.push(selectedBooksDataDto)
    }

    const quantityCardBook = (e: bookData) => {

        let bookquantity = -1
        booksProp?.map((book: bookDTO) => {
            if (e.id === book.id) {
                bookquantity = book.quantity
            }
        })

        return bookquantity
    }

    const submit = () => {
        let totalPrice = 0
        selectedBooksDto.map((e: bookDTO) => {
            totalPrice += e.totalPrice
        })
        if (selectedBooksDto[0] != null && selectedClient) {
            const OrderData: OrderData = {
                id: idProp,
                date: dateProp,
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
                totalPrice,
                orderStatus
            }
            mutate(OrderData)
        } else {
            alert("Pedido não foi criado devido a ausência de livros")
        }
    }

    return (
        <>
            <div className='edit-overlay'>
                <div className='add-container-edit'>
                    <form className="input-container-edit">

                        <div className='btn-edit'>
                            <button className='close-edit' onClick={close}>X</button>
                            <button onClick={submit} className='btn-submit-edit'>
                                Editar
                            </button>
                        </div>

                        <div className="selects-edit">

                            <select name="clients-select"
                                id="clients-select"
                                onChange={handleClient}
                                value={selectedClient ? selectedClient.name : ''}>
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
                                onChange={(e) => { setOrderStatus(e.target.value) }}
                                value={orderStatus}>

                                <option value="" disabled selected hidden id='placeHolderOpt'>Selecione o estado prévio do pedido </option>
                                <option value="WAITING_PAYMENT">Esperando pagamento</option>
                                <option value="SHIPPED">Pedido enviado</option>
                                <option value="DELIVERED">Pedido entregue</option>
                                <option value="CANCELED">Pedido cancelado</option>

                            </select>

                        </div>
                        <div className="infos-order-edit">
                            <div className="info-client-order-edit">
                                <p id="client-name-order-edit">{selectedClient?.name}</p>
                                <p id="client-number-order-edit">
                                    {selectedClient?.number && (
                                        <>
                                            {selectedClient?.number}
                                        </>
                                    )}

                                </p>
                                <p id="client-city-order-edit">
                                    {selectedClient?.city && (
                                        <>
                                            {selectedClient.city}, {selectedClient?.nbh},  {selectedClient.street}, {selectedClient?.hn}
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className="info-books-order-edit">
                                {selectedBooks?.map((e: bookData) => <CardBookOrder book={e} handleQuantity={(quantity: number) => handleBooksDto(e, quantity)} quantityProp={quantityCardBook(e)} />)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}