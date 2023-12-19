import {useState} from 'react'
import './CardGB.css'
import { SelectedCardGB } from '../../SelectedCard/SelectedCardGB'


interface CardGBProps{
    title: string,
    author: string,
    company: string,
    imgUrl: string
    category: string
}

export function CardGB({title, author, company, imgUrl, category}:CardGBProps){
    const[selected, setSelected] = useState(false)

    const handleSelectedCard= () =>{
        setSelected(prev => !prev)
    }

    return(
        <>
            <div className='cardGB-container' onClick={handleSelectedCard}>
                <div className='imgGB-container'><img src={imgUrl} alt="imagem de capa" /></div>
                <div className='infos'>
                <p className='titleGB'>{title}</p>
                <p className='authorGB'>Por {author}</p>
                <p className='companyGB'>Editora: {company}</p>
                </div>
            </div>

            {selected && <SelectedCardGB
                title={title}
                author={author}
                img={imgUrl}
                close={handleSelectedCard}
                category={category}
            />}
        </>
    )
}