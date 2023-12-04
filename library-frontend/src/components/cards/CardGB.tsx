import React from 'react'
import './CardGB.css'

interface CardGBProps{
    title: string,
    author: string,
    company: string,
    imgUrl: string
}

export function CardGB({title, author, company, imgUrl}:CardGBProps){

    return(
        <>
            <div className='cardGB-container'>
                <div className='imgGB-container'><img src={imgUrl} alt="imagem de capa" /></div>
                <div className='infos'>
                <p className='titleGB'>{title}</p>
                <p className='authorGB'>{author}</p>
                <p className='companyGB'>{company}</p>
                </div>
            </div>
        </>
    )
}