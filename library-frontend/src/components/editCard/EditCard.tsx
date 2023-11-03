import { useBookDataPut } from '../../hooks/useBookDataPut'
import { bookData } from '../../interface/bookData'
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
    imgProp: string,
    titleProp: string,
    authorProp: string,
    priceProp: number,
    conditionProp: string
    categoryProp: string

}

export function EditCard({ close, idProp, imgProp, titleProp, authorProp, priceProp, conditionProp, categoryProp }: EditCardProps) {
    const [id, setId] = useState(idProp)
    const [imgUrl, setImgUrl] = useState(imgProp)
    const [title, setTitle] = useState(titleProp)
    const [author, setAuthor] = useState(authorProp)
    const [condition, setCondition] = useState(conditionProp)
    const [price, setPrice] = useState(priceProp)
    const [category, setCategory] = useState(categoryProp)

    const { mutate } = useBookDataPut()
    const submit = () => {
        const bookData: bookData = {
            id,
            title,
            author,
            price,
            condition,
            category,
            imgUrl
        }

        mutate(bookData)
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
                        
                        
                        
                        <h2>Título</h2>
                        <Input value={title} type='text' updateValue={setTitle} placeholder="Digite o título do lívro" />

                        <h2>Autor(a)</h2>
                        <Input value={author} type='text' updateValue={setAuthor} placeholder="Digite o(a) autor(a) do lívro" />

                        <h2>Estado</h2>
                        <Select value={condition} updateValue={setCondition} />


                        <h2>Preço</h2>
                        <Input value={price} type='number' updateValue={setPrice} placeholder="Digite o preço do lívro" />

                        <h2>Url da imagem</h2>
                        <Input value={imgUrl} type='text' updateValue={setImgUrl} placeholder="Cole a Url da imagem" />

                        <h2>Categoria</h2>
                        <Input value={category} type='text' updateValue={setCategory} placeholder="Digite a categoria do livro" />

                        
                    </form>
                </div>
            </div>
        </>
    )
}