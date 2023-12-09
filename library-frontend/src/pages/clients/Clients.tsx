import { ClientCard } from '../../components/cards/ClientCard'
import { SearchBar } from '../../components/searchBar/SearchBar'
import { useState } from 'react'
import './Clients.css'
import { useClientDataGet } from '../../hooks/useClientData/useClientDataGet'


export function Clients() {
    const [search, setSearch] = useState("")
    const { data } = useClientDataGet();

    return (
        <>
            <div className='body-container'>
                <div className="clients-container">
                    <h1>Clientes</h1>
                    <SearchBar onchange={(e: any) => setSearch(e.target.value)} placeholder="Busque por clientes" />
                    <div className="clients-properties-container">
                        <span className="client-properties" id='name-property'><p>Nome</p></span>
                        <span className="client-properties" id='number-property'><p>Telefone</p></span>
                        <span className="client-properties" id='city-property'><p>Cidade</p></span>
                        <span className="client-properties" id='nbh-property'><p>Bairro</p></span>
                        <span className="client-properties" id='street-property'><p>Rua</p></span>
                        <span className="client-properties" id='hn-property'><p>Número</p></span>
                    </div>
                    {data && data.map(clientData => <ClientCard
                        id={clientData.id}
                        name={clientData.name}
                        number={clientData.number}
                        city={clientData.city}
                        nbh={clientData.nbh}
                        street={clientData.street}
                        hn={clientData.hn} />)}

                </div>
            </div>
        </>
    )
}