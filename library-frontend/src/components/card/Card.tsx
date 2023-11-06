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
                <div className="image-container"> 
                    <img src={imgUrl} alt="" />
                </div>
                <div className="data-container">
                    <h2 id="title">{title} ({condition})</h2>
                    <p id="author">{author}</p>
                    <p id="category">{category}</p>
                    <p id="quantity">qtd :{quantity}</p>
                </div>
                <div className="price-container">
                    <p id="price">R$ {price}</p>
                </div>
                
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