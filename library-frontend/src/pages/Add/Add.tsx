import {useState} from 'react'
import './Add.css'
import { useBookDataMutate } from '../../hooks/useBookDataMutate';
import { bookData } from '../../interface/bookData';
import {NavbarSearch } from '../../components/Navbar/Navbar';

interface InputProps{
    value: string | number,
    type: string,
    placeholder: string,
    updateValue(value: any): void;
}


const Input = ({value, type, placeholder, updateValue}: InputProps) => {
    return(
        <>
            <input value={value} type={type} onChange={e => updateValue(e.target.value)} placeholder={placeholder}></input>
        
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
             <select value={value} onChange={e => updateValue(e.target.value)} placeholder='estado' >
                <option value="" disabled selected hidden id='placeHolderOpt'></option>
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
    const [imgUrl , setImgUrl] = useState("");
    


    const {mutate} = useBookDataMutate()

    const submit = () => {
        const bookData: bookData = {
            title,
            author,
            price,
            condition,
            imgUrl   
        } 

        mutate(bookData)
    }


  return (
    <>
    <NavbarSearch/>
    <div className='add-container'>
        <h1>ADICIONAR</h1>

        <h2>DETALHES DO LIVRO</h2>
        <form className="input-container">
            <h2>Título</h2>
            <Input value={title} type='text' updateValue={setTitle} placeholder="Digite o título do lívro"/>

            <h2>Autor(a)</h2> 
            <Input value={author} type='text' updateValue={setAuthor} placeholder="Digite o(a) autor(a) do lívro"/>

            <h2>Estado</h2>
            <Select value={condition} updateValue={setCondition}/>
            

            <h2>Preço</h2>
            <Input value={price} type='number' updateValue={setPrice} placeholder="Digite o preço do lívro"/>

            <h2>Url da imagem</h2>
            <Input value={imgUrl} type='text' updateValue={setImgUrl} placeholder="Cole a Url da imagem"/>

            <button onClick={submit} className='btn-submit'>
                Adicionar
            </button>
        </form>
    </div>
    </>
  )
}

export default Add