import "./card.css"

interface CardProps{
    price: number,
    title: string,
    author:string,
    imgUrl? : string
}

export function Card({ price, title, author, imgUrl } : CardProps){
    return (
        
        <div className="card">
            <div className="image-container"> 
                <img src={imgUrl} alt="" />
            </div>
            <div className="data-container">
                <h2 id="title">{title}</h2>
                <p id="author">{author}</p>
            </div>
            <div className="price-container">
                <p id="price">R$ {price}</p>
            </div>
            
        </div>
        
    )
}