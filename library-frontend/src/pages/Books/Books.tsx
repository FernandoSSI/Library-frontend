import React from 'react'
import { Card } from '../../components/card/Card';
import { bookData } from '../../interface/bookData';
import { useBookData } from '../../hooks/useBookData';
import './Books.css'

const Books = () => {

    const {data}= useBookData()

  return (
    <div className='book-body'>
      <h1>Library</h1>
      <div className='card-grid'>
        
        {data?.map(bookData =>
           <Card 
           price={bookData.price} 
           title={bookData.title} 
           author={bookData.author}/>)}
        </div> 
    </div>
  )
}

export default Books