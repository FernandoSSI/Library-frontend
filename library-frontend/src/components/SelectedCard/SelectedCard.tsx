import { useBookDataDelete } from '../../hooks/useBookDataDelete'
import {FaTrashAlt} from 'react-icons/fa'
import './SelectedCard.css'

interface SelectedCardProps{
    close: any,
    id: string,
    img: string,
    title: string,
    author: string,
    price: number,
    condition: string
}

export function SelectedCard({close, id, img, title, author, price, condition}: SelectedCardProps){

    const {mutate} = useBookDataDelete()
    const del= ()=>{
        mutate(id)
        close()
    }
    

    return (
        <div className="selectedCard-overlay">
            <div className="selectedCard-containerSl">
                <div className='img-containerSl'> 
                <img src={img} alt="" />
                <p id='condition'>estado: {condition}</p>
                </div>
                <div className="info-containerSl">
                    <p id='id'>id: {id}</p>
                    <h1 id='title'>{title}</h1> 
                    <p id='author'>{author}</p>
                    <h1 id='price'>R$ {price}</h1>
                    
                </div>
                <div className="btn-containerSl">
                    <button className='del' onClick={del}><FaTrashAlt/></button>
                    <button className='close' onClick={close}>X</button>
                    
                </div>
            </div>
        </div>
    )
}