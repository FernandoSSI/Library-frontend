import React from 'react'
import { useState } from 'react'
import './OnlineCatalog.css'
import { SlMagnifier } from "react-icons/sl";
import { CardGB } from '../../components/cards/OnlineCatalogCard/CardGB';
import axios from 'axios';

export function OnlineCatalog() {

    const [search,setSearch]=useState("");
    const [bookData,setData]=useState<any[]>([]);

    // API key in environment variable
    let keyApi = JSON.stringify(import.meta.env.VITE_BOOKS_API_KEY)
    keyApi = keyApi.replace(/["]/g, '');
    

    const searchBook=()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ search +"&key=" + keyApi+ "&maxResults=25&langRestrict=pt-BR")
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
        <div className='onlineCat-body-container'>
            <div className='catalog-container'>
                <div className='catalog-title'>
                    <h1>Catálogo online</h1>
                </div>
                
                <div className='search-bar catalog-searchbar'>
                    <input type="search" name="online-search" id="bar" placeholder='busque por livros e adicione-os!' onChange={(e: any) => {setSearch(e.target.value)}} onKeyDown={handleSearch}/>
                    <button type="submit" id='search-btn' onClick={ ()=>searchBook()}><SlMagnifier /></button>
                </div>

                <div className='card-grid'>
                    {bookData?.map(item => {

                        let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                        let author = item.volumeInfo.authors
                        let category = item.volumeInfo.categories
                        if(item.volumeInfo.authors && item.volumeInfo.categories){
                            author= JSON.stringify(item.volumeInfo.authors).replace(/[\[\]"]/g, '')
                            category = JSON.stringify(item.volumeInfo.categories).replace(/[\[\]"]/g, '')
                        }
                        
                        return (
                            <CardGB
                            title={item.volumeInfo.title}
                            author={author}
                            imgUrl={thumbnail}
                            company={item.volumeInfo.publisher}
                            category={category} />
                        )
                    })}
                    
                </div>
            </div>
        </div>

        </>
    )
}