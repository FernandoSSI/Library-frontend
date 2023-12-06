import { useBookDataMutate } from '../../hooks/useBookData/useBookDataPost';
import { bookData } from '../../interface/bookData'
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

interface AddBookGBProps {
    close: any,
    imgProp: string,
    titleProp: string,
    authorProp: string,
    categoryProp: string
}

export function AddBookGB({ close, imgProp, titleProp, authorProp, categoryProp }: AddBookGBProps) {
    const [imgUrl, setImgUrl] = useState(imgProp)
    const [title, setTitle] = useState(titleProp)
    const [author, setAuthor] = useState(authorProp)
    const [condition, setCondition] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState(categoryProp)
    const [quantity, setQuantity] = useState(1)

    const { mutate } = useBookDataMutate()
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
            <div className='edit-overlay'>
                <div className='add-container-edit'>
                    <form className="input-container-edit">

                        <div className='btn-edit'>
                            <button className='close-edit' onClick={close}>X</button>
                            <button onClick={submit} className='btn-submit-edit'>
                                Adicionar
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