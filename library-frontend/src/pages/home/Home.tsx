import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import { Card } from '../../components/card/Card';
import { bookData } from '../../interface/bookData';
import { useBookData } from '../../hooks/useBookData';
import { Navbar } from '../../components/Navbar/Navbar';

function Home() {

  //const {data}= useBookData();

 

  return (
    <div className="container">
      {/*
      <h1>Library</h1>
      <div className='card-grid'>
        {data?.map(bookData =>
           <Card 
           price={bookData.price} 
           title={bookData.title} 
           author={bookData.author}/>)}
        </div> */}
        <Navbar/>
      
    </div>
  )
}

export default Home