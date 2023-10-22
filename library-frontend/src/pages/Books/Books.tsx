import { useState, useEffect } from 'react'
import { Card } from '../../components/card/Card';
import { useBookData } from '../../hooks/useBookData';
import './Books.css'
import { AiOutlineSearch } from 'react-icons/ai';



const Books = () => {

  const { data } = useBookData()
  const [search, setSearch] = useState("")



  return (
    <>
      <div className="search">
        <h1>Catálogo de livros</h1>
        <input type="search" name="search-bar" id="bar" onChange={e => setSearch(e.target.value)} />
        <button id="search-buttom" type="submit"><AiOutlineSearch /></button>
      </div>
      <div className='book-body'>
        <div className='card-grid'>

          {data?.map(bookData => {
            if (search == "") {
              return (
                <Card
                  price={bookData.price}
                  title={bookData.title}
                  author={bookData.author} />)
            } else if (bookData.title.toLowerCase().includes(search.toLowerCase()) || bookData.author.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Card
                  price={bookData.price}
                  title={bookData.title}
                  author={bookData.author} />
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default Books