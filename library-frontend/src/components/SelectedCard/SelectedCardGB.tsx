import './SelectedCardGB.css'
import {useState} from 'react'
import { AddBookGB } from '../addBookGB/AddBookGB';


interface SelectedCardGBProps{
    img: string,
    title: string,
    author: string,
    category: string,
    close: any,
    
    
}


export function SelectedCardGB({title, author, category, img, close}:SelectedCardGBProps){
    const [selected, setSelected]= useState(false)

    const handleSelected= () =>{
        setSelected(prev => !prev)
    }

    return(
        <>
             <div className="selectedCard-overlay">
                <div className="selectedCard-containerSl">
                    <div className='img-containerSl'>
                        <img src={img} alt="" />
                    </div>
                    <div className="info-containerSl">
                        <h1 id='title'>{title}</h1>
                        <p id='author'>{author}</p>
                        <p>{category}</p>   
                    </div>
                    <div className="btn-containerSl">
                        <button className='addGB-btn' onClick={handleSelected}>+</button>
                        <button className='close' onClick={close}>X</button>
                    </div>
                </div>
            </div>

            {selected && <AddBookGB
                titleProp={title}
                authorProp={author}
                categoryProp={category}
                imgProp={img}
                close={handleSelected}
            />}
        
        </>
    )
}