import "./AddOrder.css"
import { useAllClientData } from "../../hooks/useClientData/useClientDataGet"
import { useAllBookData } from "../../hooks/useBookData/useBookDataGet"
import { useState } from "react";
import { clientData } from "../../interface/clientData";

export function AddOrders() {

    const { dataClient } = useAllClientData()
    const { dataBook } = useAllBookData()
    const [selectedClient, setSelectedClient] = useState<clientData | null>(null);

    const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedClientData = dataClient && dataClient[selectedIndex];
        setSelectedClient(selectedClientData || null);
    };


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
                                <option key={index} value={e.name}>
                                    {e.name}
                                </option>))
                            }
                        </select>
                        <select name="books-select" id="books-select" >
                            <option value="" disabled selected hidden id='placeHolderOpt'>selecione os livros</option>

                            {dataBook && dataBook?.map(e =>
                                <option value={e.title}>{e.title}</option>)}
                        </select>
                    </div>
                    <div className="infos-orderadd">
                        <div className="info-client-orderadd">
                            <p id="client-name-order">{selectedClient?.name}</p>
                            <p id="client-number-order">{selectedClient?.number}</p>
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
                    </div>
                </form>
            </div>

        </>
    )
}