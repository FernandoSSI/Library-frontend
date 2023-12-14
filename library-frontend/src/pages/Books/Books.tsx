import { useEffect, useState } from 'react'
import { Card } from '../../components/cards/Card';
import { useBookData } from '../../hooks/useBookData/useBookDataGet';
import './Books.css'
import { SearchBar } from '../../components/searchBar/SearchBar';
import { bookData } from '../../interface/bookData';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { SlMagnifier } from 'react-icons/sl';



const Books = () => {

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const { data } = useBookData(search, page)

  return (
    <>
      <div className='body-container'>
        <div className='books-title'> <h1>Acervo</h1></div>
        <div className='books-searchbar'>
          <div className="search-bar">

            <div className="add-button">
              <Link to={"/addbooks"}><GoPlus /></Link>
            </div>
            <input
              type="search"
              name="search-bar"
              id="bar"
              onChange={e => setSearch(e.target.value)}
              placeholder="Procure por título ou autor" />
          </div>
        </div>
        <div className='book-body'>

          <div className="books-properties-container">
            <span className="book-properties" id='cover-property'><p>Capa</p></span>
            <span className="book-properties" id='title-property'><p>Título</p></span>
            <span className="book-properties" id='author-property'><p>Autor</p></span>
            <span className="book-properties" id='condition-property'><p>condição</p></span>
            <span className="book-properties" id='category-property'><p>Gênero</p></span>
            <span className="book-properties" id='price-property'><p>valor</p></span>
            <span className="book-properties" id='quantity-property'><p>estoque</p></span>
          </div>
          <div className='card-grid'>

            {data?.map(bookData => {
              return (
                <Card
                  id={bookData.id}
                  condition={bookData.condition}
                  price={bookData.price}
                  title={bookData.title}
                  author={bookData.author}
                  imgUrl={bookData.imgUrl}
                  category={bookData.category}
                  quantity={bookData.quantity} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Books