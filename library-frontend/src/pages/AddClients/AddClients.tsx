import { useState } from 'react'
import './AddClients.css'
import { clientData } from '../../interface/clientData';
import { useClientDataMutate } from '../../hooks/useClientData/useClientDataPost';

interface InputProps {
    value: string | number,
    type: string,
    id: string,
    placeholder: string,
    updateValue(value: any): void;
}


const Input = ({ value, type, placeholder, updateValue, id }: InputProps) => {
    return (
        <>
            <input id={id} value={value} type={type} onChange={e => updateValue(e.target.value)} placeholder={placeholder}></input>

        </>
    )
}

const AddClients = () => {
    const [name, setName] = useState("");
    const [numberP, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [nbh, setNbh] = useState("");
    const [street, setStreet] = useState("");
    const [hnP, setHn] = useState("");

    const { mutate } = useClientDataMutate()

    const submit = () => {
        let number = Number(numberP);
        let hn = Number(hnP);
        const clientData: clientData = {
            name, 
            number,
            city,
            nbh,
            street,
            hn
        }

        mutate(clientData)
    }


    return (
        <>
            <div className='add-container'>
                <div className="add-title"><h1>Adicionar cliente</h1></div>

                <form className="input-container">
                    <span className='span-add-name'>
                        <p>Nome</p>
                        <Input id="input-name" value={name} type='text' updateValue={setName} placeholder="Digite o nome do cliente" />
                    </span>

                    <span className='span-add-number'>
                        <p>Telefone(a)</p>
                        <Input id="input-number" value={numberP} type='number' updateValue={setNumber} placeholder="Digite o telefone do cliente" />
                    </span>

                    <span className='span-add-city'>
                        <p>Cidade</p>
                        <Input id="input-city" value={city} type='text' updateValue={setCity} placeholder="Digite a cidade do cliente" />
                    </span>

                    <span className='span-add-nbh'>
                        <p>Bairro</p>
                        <Input id="input-nbh" value={nbh} type='text' updateValue={setNbh} placeholder="Digite o bairro do cliente" />
                    </span>

                    <span className='span-add-street'>
                        <p>Rua</p>
                        <Input id="input-street" value={street} type='text' updateValue={setStreet} placeholder="Digite a rua do cliente" />
                    </span>
                    
                    <span className='span-add-hn'>
                        <p>Número residencial</p>
                        <Input id="input-hn" value={hnP} type='number' updateValue={setHn} placeholder="Digite o número residencial do cliente" />
                    </span>
                    
                    <span className='span-add-btn'>
                        <button onClick={submit} className='btn-submit'>
                            Adicionar
                        </button>
                    </span>
                </form>
            </div>

        </>
    )
}

export default AddClients