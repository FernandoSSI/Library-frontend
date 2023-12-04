import React from 'react'
import { useState } from 'react'
import './OnlineCatalog.css'
import { SlMagnifier } from "react-icons/sl";
import { CardGB } from '../../components/cards/CardGB';
import axios from 'axios';

export function OnlineCatalog() {

    const [search,setSearch]=useState("");
    const [bookData,setData]=useState<any[]>([]);

    const keyApi = "AIzaSyCawe1Lhyw4NKGkVe0NNGBz7XZsQIUCH4k"

    const searchBook=()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ search +"&key=" + keyApi+ "&maxResults=24")
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
        
    }
    // adicionar paginação

    const handleSearch=(evt:any)=>{
        if(evt.key==='Enter'){
            searchBook()
        }
    }

    return (
        <>
            <div className='catalog-container'>
                <div className='catalog-title'>
                    <h1>Catálogo online</h1>
                </div>

                <div className='search-bar'>
                    <input type="search" name="online-search" id="bar" placeholder='busque por livros' onChange={(e: any) => {setSearch(e.target.value)}} onKeyDown={handleSearch}/>
                    <button type="submit" id='search-btn' onClick={ ()=>searchBook()}><SlMagnifier /></button>
                </div>

                <div className='card-grid'>
                    {bookData?.map(item => {

                        let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail

                        return (
                            <CardGB
                            title={item.volumeInfo.title}
                            author={item.volumeInfo.authors}
                            imgUrl={thumbnail}
                            company={item.volumeInfo.publisher} />
                        )
                    })}
                    
                </div>
            </div>


        </>
    )
}