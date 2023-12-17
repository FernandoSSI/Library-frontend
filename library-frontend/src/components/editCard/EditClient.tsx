import { useBookDataPut } from '../../hooks/useBookData/useBookDataPut'
import { useClientDataPut } from '../../hooks/useClientData/useClientDataPut';
import { bookData } from '../../interface/bookData'
import { clientData } from '../../interface/clientData';
import './EditCard.css'
import { useState } from 'react'


interface InputProps {
    value: string | number,
    type: string,
    placeholder: string,
    updateValue(value: any): void;
}


const Input = ({ value, type, placeholder, updateValue }: InputProps) => {
    return (
        <>
            <input value={value} type={type} onChange={e => updateValue(e.target.value)} placeholder={placeholder}></input>

        </>
    )
}

interface selectProps {
    value: string | number,
    updateValue(value: any): void;
}


const Select = ({ value, updateValue }: selectProps) => {
    return (
        <>
            <select value={value} onChange={e => updateValue(e.target.value)} placeholder='estado' >
                <option value="" disabled selected hidden id='placeHolderOpt'></option>
                <option value="Novo">Novo</option>
                <option value="Seminovo" >Seminovo</option>
                <option value="Usado" >Usado</option>
            </select>

        </>
    )
}

interface EditCardProps {
    close: any,
    idProp: string,
    nameProp: string,
    numberProp: any,
    cityProp: string,
    nbhProp: string,
    streetProp: string,
    hnProp: any
}

export function EditClient({ close, idProp, nameProp, numberProp, cityProp, nbhProp, streetProp, hnProp }: EditCardProps) {
    const [id, setId] = useState(idProp)
    const [name, setName] = useState(nameProp)
    const [numberP, setNumber] = useState(numberProp)
    const [city, setCity] = useState(cityProp)
    const [nbh, setNbh] = useState(nbhProp)
    const [street, setStreet] = useState(streetProp)
    const [hnP, setHn] = useState(hnProp)

    const { mutate } = useClientDataPut()
    const submit = () => {
        let number = Number(numberP);
        let hn = Number(hnP);
        const clientData: clientData = {
            id,
            name,
            number,
            city,
            nbh,
            street,
            hn,
    
        }

        mutate(clientData)
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
                        
                        
                        <div className='inputs-edit'>
                        <h3>Nome</h3>
                        <Input value={name} type='text' updateValue={setName} placeholder="Digite o nome do cliente" />

                        <h3>Telefone</h3>
                        <Input value={numberP} type='text' updateValue={setNumber} placeholder="Digite o telefone do cliente" />

                        <h3>Cidade</h3>
                        <Input value={city} type='text' updateValue={setCity} placeholder="Digite a cidade do cliente" />


                        <h3>Bairro</h3>
                        <Input value={nbh} type='text' updateValue={setNbh} placeholder="Digite o bairro do cliente" />

                        <h3>Rua</h3>
                        <Input value={street} type='text' updateValue={setStreet} placeholder="Digite a rua do cliente" />

                        <h3>Número residencial</h3>
                        <Input value={hnP} type='text' updateValue={setHn} placeholder="Digite a categoria do livro" />
                                                
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}