import { useState } from 'react'
import "./card.css"
import { useBookDataDelete } from '../../../hooks/useBookData/useBookDataDelete'
import { EditCard } from '../../editCard/EditCard'

interface CardProps {
    id: string,
    condition: string,
    price: number,
    title: string,
    author: string,
    imgUrl: string,
    category: string,
    quantity: number

}

export function Card({ price, title, author, imgUrl, id, condition, category, quantity }: CardProps) {
    const [selected, setSelected] = useState(false)
    const [edit, setEdit] = useState(false)

    let quantityId = "quantity"
    if (quantity == 0) {
        quantityId = "zeroQtd"
    }

    const handleSelectedCard = () => {
        setSelected(prev => !prev)
    }

    const { mutate } = useBookDataDelete()
    const del = () => {
        const conf = confirm("Deseja Realmente excluir este livro?")
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
                <div className="card" onClick={handleSelectedCard}>
                    <span className="image-container">
                        <img src={imgUrl} alt="" />
                    </span>
                    <span className='card-title'><p id="title">{title} </p></span>
                    <span className='card-author'><p id="author">{author}</p></span>
                    <span className='card-condition'><p id='condition'>{condition}</p></span>
                    <span className='card-category'><p id="category">{category}</p></span>
                    <span className='card-price'><p id="price">R$ {price}</p></span>
                    <span className='card-quantity'><p id={quantityId}>{quantity}</p></span>
                </div>
                {selected && 
                    <div className='card-options'>
                        <button className='edit-btn' onClick={openEdit}>Editar livro</button>
                        <button className='del-btn' onClick={del}>Excluir livro</button>
                        <button className='buy-btn'>Adicionar ao pedido</button>
                    </div>
                }
    
            </div>
            
           {edit && <EditCard
                close={openEdit}
                idProp={id}
                imgProp={imgUrl}
                titleProp={title}
                authorProp={author}
                conditionProp={condition}
                priceProp={price} 
                categoryProp={category}
                quantityProp={quantity}/>}
        </>

    )
}