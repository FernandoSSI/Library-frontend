import { useState } from 'react'
import { Card } from '../../components/cards/Card';
import { useBookData } from '../../hooks/useBookData/useBookDataGet';
import './Books.css'
import { SearchBar } from '../../components/searchBar/SearchBar';



const Books = () => {

  const { data } = useBookData()
  const [search, setSearch] = useState("")

  

  return (
    <>
      <div className='body-container'>
        <div className='books-title'> <h1>Acervo</h1></div>
        <SearchBar onchange={(e: any) => setSearch(e.target.value)}/>
        <div className='book-body'>

          <div className="books-properties-container">
            <span className="book-properties" id='cover-property'><p>Capa</p></span>
            <span className="book-properties" id='title-property'><p>Titulo</p></span>
            <span className="book-properties" id='author-property'><p>Autor</p></span>
            <span className="book-properties" id='condition-property'><p>condição</p></span>
            <span className="book-properties" id='category-property'><p>Gênero</p></span>
            <span className="book-properties" id='price-property'><p>valor</p></span>
            <span className="book-properties" id='quantity-property'><p>estoque</p></span>
          </div>
          <div className='card-grid'>
            {data?.map(bookData => {
              if ((bookData.title.toLowerCase().includes(search.toLowerCase()) || bookData.author.toLowerCase().includes(search.toLowerCase())) || bookData.category.toLowerCase().includes(search.toLowerCase())) {
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
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Books