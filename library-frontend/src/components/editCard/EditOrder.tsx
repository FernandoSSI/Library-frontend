import { useState } from 'react';
import { useAllClientData } from '../../hooks/useClientData/useClientDataGet';
import { bookDTO } from '../../interface/bookDTO'
import { clientData } from '../../interface/clientData'
import './EditOrder.css'
import { useAllBookData } from '../../hooks/useBookData/useBookDataGet';
import { bookData } from '../../interface/bookData';
import { SiWhatsapp } from 'react-icons/si';
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


    function getClientIndex(clientId: any) {
        const index = dataClient?.findIndex(client => client.id === clientId);
        return index !== -1 ? index : null;
    }

    const prevClientIndex = getClientIndex(clientProp.id)
    const [selectedClient, setSelectedClient] = useState<clientData | any>(dataClient && prevClientIndex && dataClient[prevClientIndex]);
    console.log(selectedClient)

    const { dataBook } = useAllBookData()
    const [selectedBooks, setSelectedBooks] = useState<any>(booksProp)
    const [selectedBooksDto, setSelectedBooksDto] = useState<any>([])

    const [client, setClient] = useState(clientProp)
    const [orderStatus, setOrderStatus] = useState(orderStatusProp)

    const { mutate } = useOrderDataPut()

    const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedClientData = dataClient && dataClient[selectedIndex];
        setSelectedClient(selectedClientData || null);
    };

    const handleBooks = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedBooksData = dataBook && dataBook[selectedIndex];

        if (selectedBooksData) {
            const isBookAlreadySelected = selectedBooks.some((book: bookDTO) => book.id === selectedBooksData.id);

            if (!isBookAlreadySelected) {
                setSelectedBooks([...selectedBooks, selectedBooksData]);
            } else {
                alert("Este livro já está no pedido!");
            }
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
        console.log(selectedBooksDto)
    }

    const submit = () => {
        let totalPrice = 0
        selectedBooksDto.map((e:bookDTO) =>{
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
                totalPrice: totalPrice,
                orderStatus: orderStatus
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
                                <option value="SHIPPED">Enviado</option>
                                <option value="DELIVERED">Entregue</option>
                                <option value="CANCELED">Cancelado</option>

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
                                {selectedBooks?.map((e: any) => <CardBookOrder book={e} handleQuantity={(quantity: number) => handleBooksDto(e, quantity)} />)}
                            </div>
                        </div>




                    </form>
                </div>
            </div>

        </>
    )
}