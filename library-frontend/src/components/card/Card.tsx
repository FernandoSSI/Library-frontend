import {useState} from 'react'
import "./card.css"
import { SelectedCard } from '../SelectedCard/SelectedCard'

interface CardProps{
    id: string,
    condition: string,
    price: number,
    title: string,
    author:string,
    imgUrl : string,
    category: string,
    quantity: number

}

export function Card({ price, title, author, imgUrl, id, condition, category, quantity } : CardProps){
    const[selected, setSelected] = useState(false)

    const handleSelectedCard= () =>{
        setSelected(prev => !prev)
    }


    return (
        <>
            <div className="card" onClick={handleSelectedCard}>
                <span className="image-container"> 
                    <img src={imgUrl} alt="" />
                </span>
                <span className='card-title'><p id="title">{title} </p></span>
                <span className='card-author'><p id="author">{author}</p></span>
                <span className='card-condition'><p id='condition'>{condition}</p></span>
                <span className='card-category'><p id="category">{category}</p></span>
                <span className='card-price'><p id="price">R$ {price}</p></span>
                <span className='card-quantity'><p id="quantity">{quantity}</p></span>
            </div>

            {selected && <SelectedCard 
            close={handleSelectedCard} 
            id={id} 
            img={imgUrl}
            title={title}
            author={author}
            condition={condition}
            price={price} 
            category={category} 
            quantity={quantity}/>}

        </>
        
    )
}