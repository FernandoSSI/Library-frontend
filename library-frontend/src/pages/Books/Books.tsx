import { useEffect, useState } from 'react'
import { Card } from '../../components/cards/BookCard/Card';
import { useBookData } from '../../hooks/useBookData/useBookDataGet';
import './Books.css'
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { Pagination } from '../../components/Pagination/Pagination';



const Books = () => {

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const { dataBook } = useBookData(search, page)
  const [totalPages, setTotalPages]= useState(dataBook?.totalPages)

  useEffect(()=>{
    setTotalPages(dataBook?.totalPages)
  }, [dataBook])

  const handlePage =(e:number)=>{
    setPage(e-1);
  }

  return (
    <>
      <div className='book-body-container'>
        <div className='books-title' id='books-title'> <h1>Acervo</h1></div>
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

            {dataBook?.content.map(bookData => {
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
        <Pagination totalPages={totalPages} changePage={handlePage} currentPage={page+1}/>    
      </div>
    </>
  )
}

export default Books