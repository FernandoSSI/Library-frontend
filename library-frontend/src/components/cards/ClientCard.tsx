import { useState } from 'react';
import './ClientCard.css'
import { useClientDataDelete } from '../../hooks/useClientData/useClientDataDelete';
import { EditCard } from '../editCard/EditCard';
import { EditClient } from '../editCard/EditClient';

export interface ClientCardProps{
    id?: any;
    name: string;
    number: number;
    city: string;
    nbh: string;
    street: string;
    hn: number;
}


export function ClientCard({id, name, number, city, nbh, street, hn}:ClientCardProps) {

    const [selected, setSelected] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleSelectedCard = () => {
        setSelected(prev => !prev)
    }

    const { mutate } = useClientDataDelete()
    const del = () => {
        const conf = confirm("Deseja Realmente excluir este cliente?")
        if (conf == true) {
            mutate(id)
            close()
        }
    }

    const openEdit = () => {
        setEdit(prev => !prev)
        
    }


    return (
        <>
            <div className='card-overlay'>
                <div className="client-card" onClick={handleSelectedCard}>
                    <span className='cardc-name'><p id="name"> {name} </p></span>
                    <span className='cardc-number'><p id="number">{number}</p></span>
                    <span className='cardc-city'><p id='city'>{city}</p></span>
                    <span className='cardc-nbh'><p id="nbh">{nbh}</p></span>
                    <span className='cardc-street'><p id="street">{street}</p></span>
                    <span className='cardc-hn'><p id="hn">{hn}</p></span>
                </div>
                
                {selected && 
                    <div className='card-options'>
                        <button className='editClient-btn' onClick={openEdit}>Editar informações</button>
                        <button className='delClient-btn' onClick={del}>Excluir cliente</button>
                    </div>
                }
            </div>
            {edit&& <EditClient 
                    close={openEdit}
                    idProp={id} 
                    nameProp={name} 
                    numberProp={number} 
                    cityProp={city}
                    nbhProp={nbh}
                    streetProp={street}
                    hnProp={hn} />}
        </>
    )
}