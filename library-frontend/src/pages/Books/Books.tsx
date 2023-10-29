import { useState } from 'react'
import { Card } from '../../components/card/Card';
import { useBookData } from '../../hooks/useBookDataGet';
import './Books.css'
import { NavbarSearch } from '../../components/Navbar/Navbar';
import { SelectedCard } from '../../components/SelectedCard/SelectedCard';
import { bookData } from '../../interface/bookData';



const Books = () => {

  const { data } = useBookData()
  const [search, setSearch] = useState("")



  return (
    <>
      <NavbarSearch onchange={(e: any) => setSearch(e.target.value)}/>
    
      <div className='book-body'>
        <div className='card-grid'>

          {data?.map(bookData => {
            if (search == "") {
              return (
                <Card
                  id={bookData.id}
                  condition={bookData.condition}
                  price={bookData.price}
                  title={bookData.title}
                  author={bookData.author} 
                  imgUrl={bookData.imgUrl}/>)
            } else if (bookData.title.toLowerCase().includes(search.toLowerCase()) || bookData.author.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Card
                  id={bookData.id}
                  condition={bookData.condition}
                  price={bookData.price}
                  title={bookData.title}
                  author={bookData.author}
                  imgUrl={bookData.imgUrl} />
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default Books