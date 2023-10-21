import React, {useState} from 'react'
import './Add.css'
import { useBookDataMutate } from '../../hooks/useBookDataMutate';
import { bookData } from '../../interface/bookData';

interface InputProps{
    value: string | number,
    type: string
    updateValue(value: any): void;
}


const Input = ({value, type, updateValue}: InputProps) => {
    return(
        <>
            <input value={value} type={type} onChange={e => updateValue(e.target.value)}></input>
        
        </>
    )
}

interface selectProps{
    value: string | number,
    updateValue(value: any): void;
}


const Select = ({value, updateValue}: selectProps) => {
    return(
        <>
             <select value={value} onChange={e => updateValue(e.target.value)}>
                <option value="Novo">Novo</option>
                <option value="Seminovo" >Seminovo</option>
                <option value="Usado" >Usado</option>
            </select>
        
        </>
    )
}



const Add = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    const [condition, setCondition] = useState("");



    const {mutate} = useBookDataMutate()

    const submit = () => {
        const bookData: bookData = {
            title,
            author,
            price,
            condition
            
        } 

        mutate(bookData)
    }


  return (
    <>
    <div className='add-container'>
        <h1>ADICIONAR</h1>

        <h2>DETALHES DO LIVRO</h2>
        <form className="input-container">
            <h2>Título</h2>
            <Input value={title} type='text' updateValue={setTitle}/>

            <h2>Autor(a)</h2> 
            <Input value={author} type='text' updateValue={setAuthor}/>

            <h2>Estado</h2>
            <Select value={condition} updateValue={setCondition}/>
            

            <h2>Preço</h2>
            <Input value={price} type='number' updateValue={setPrice}/>

            <button onClick={submit} className='btn-submit'>
                Adicionar
            </button>
        </form>
    </div>
    </>
  )
}

export default Add