import { useBookDataDelete } from '../../hooks/useBookDataDelete'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import './SelectedCard.css'
import { useState } from 'react'
import { EditCard } from '../editCard/EditCard'

interface SelectedCardProps {
    close: any,
    id: string,
    img: string,
    title: string,
    author: string,
    price: number,
    condition: string
}

export function SelectedCard({ close, id, img, title, author, price, condition }: SelectedCardProps) {

    const [edit, setEdit] = useState(false)

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
                        <button className='edit' onClick={openEdit}><FaPencilAlt /></button>
                        <button className='del' onClick={del}><FaTrashAlt /></button>
                        <button className='close' onClick={close}>X</button>
                    </div>
                </div>
            </div>
            {edit && <EditCard
                close={openEdit}
                idProp={id}
                imgProp={img}
                titleProp={title}
                authorProp={author}
                conditionProp={condition}
                priceProp={price} />}
        </>
    )
}