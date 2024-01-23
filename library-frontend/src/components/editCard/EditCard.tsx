import { useBookDataPut } from '../../hooks/useBookData/useBookDataPut'
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
    quantityProp: number

}

export function EditCard({ close, idProp, imgProp, titleProp, authorProp, priceProp, conditionProp, categoryProp, quantityProp }: EditCardProps) {
    const id = idProp
    const [imgUrl, setImgUrl] = useState(imgProp)
    const [title, setTitle] = useState(titleProp)
    const [author, setAuthor] = useState(authorProp)
    const [condition, setCondition] = useState(conditionProp)
    const [price, setPrice] = useState(priceProp)
    const [category, setCategory] = useState(categoryProp)
    const [quantity, setQuantity] = useState(quantityProp)

    const { mutate } = useBookDataPut()
    const submit = () => {
        const bookData: bookData = {
            id,
            title,
            author,
            price,
            condition,
            category,
            imgUrl,
            quantity,
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
                        
                        
                        <div className='inputs-edit'>
                        <h3>Título</h3>
                        <Input value={title} type='text' updateValue={setTitle} placeholder="Digite o título do lívro" />

                        <h3>Autor(a)</h3>
                        <Input value={author} type='text' updateValue={setAuthor} placeholder="Digite o(a) autor(a) do lívro" />

                        <h3>Estado</h3>
                        <Select value={condition} updateValue={setCondition} />


                        <h3>Preço</h3>
                        <Input value={price} type='number' updateValue={setPrice} placeholder="Digite o preço do lívro" />

                        <h3>Url da imagem</h3>
                        <Input value={imgUrl} type='text' updateValue={setImgUrl} placeholder="Cole a Url da imagem" />

                        <h3>Categoria</h3>
                        <Input value={category} type='text' updateValue={setCategory} placeholder="Digite a categoria do livro" />

                        <h3>
                            qtd: {<Input value={quantity} type='number' updateValue={setQuantity} placeholder="" />}
                        </h3>
                        
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}