import {useState} from 'react'
import './Add.css'
import { useBookDataMutate } from '../../hooks/useBookData/useBookDataPost';
import { bookData } from '../../interface/bookData';
import {NavbarSearch } from '../../components/Navbar/Navbar';

interface InputProps{
    value: string | number,
    type: string,
    id: string,
    placeholder: string,
    updateValue(value: any): void;
}


const Input = ({value, type, placeholder, updateValue, id}: InputProps) => {
    return(
        <>
            <input id={id} value={value} type={type} onChange={e => updateValue(e.target.value)} placeholder={placeholder}></input>
        
        </>
    )
}

interface selectProps{
    value: string | number,
    id: string,
    updateValue(value: any): void;
}


const Select = ({value, updateValue, id}: selectProps) => {
    return(
        <>
             <select id={id} value={value} onChange={e => updateValue(e.target.value)} placeholder='estado' >
                <option value="" disabled selected hidden id='placeHolderOpt'>selecione o estado</option>
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
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(1);
    


    const {mutate} = useBookDataMutate()

    const submit = () => {
        const bookData: bookData = {
            title,
            author,
            price,
            condition,
            imgUrl,
            category,   
            quantity
        } 

        mutate(bookData)
    }


  return (
    <>
    
    <div className='add-container'>
        <div className="add-title"><h1>Adicionar ao Acervo</h1></div>
        
        <form className="input-container">

        <div className='section1-add'>
            <span className='span-add-title'>
            <p>Título</p>
            <Input id="input-title" value={title} type='text' updateValue={setTitle} placeholder="Digite o título do livro"/>
            </span>

            <span className='span-add-author'>
            <p>Autor(a)</p> 
            <Input id="input-author" value={author} type='text' updateValue={setAuthor} placeholder="Digite o(a) autor(a) do livro"/>
            </span>
        </div>

        <div className='section2-add'>
            <span className='span-add-condition'>
            <p>Estado</p>
            <Select id="input-condition" value={condition} updateValue={setCondition}/>
            </span>

            <span className='span-add-category'>
            <p>Categoria</p>
            <Input id="input-category" value={category} type='text' updateValue={setCategory} placeholder="Digite a categoria do livro"/>
            </span>

            <span className='span-add-img'>
            <p>Url da imagem</p>
            <Input id="input-img" value={imgUrl} type='text' updateValue={setImgUrl} placeholder="Cole a Url da imagem "/>
            </span>

           

            
        </div>

        <div className='section3-add'>
        <span className='span-add-price'>
            <p>Preço</p>
            <Input id="input-price" value={price} type='number' updateValue={setPrice} placeholder="Digite o preço do livro"/>
            </span>

            
            <span className='span-add-quantity'>
            <p>Quantidade</p>
            <Input id="input-quantity" value={quantity} type='number' updateValue={setQuantity} placeholder="Digite a categoria do livro"/>
            </span>
        </div>

            <button onClick={submit} className='btn-submit'>
                Adicionar
            </button>
        </form>
    </div>
    </>
  )
}

export default Add