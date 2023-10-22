import "./card.css"

interface CardProps{
    price: number,
    title: string,
    author:string
}

export function Card({ price, title, author } : CardProps){
    return (
        
        <div className="card">
            <div className="image-container"> </div>
            <div className="data-container">
                <h2 id="title">{title}</h2>
                <p id="author">{author}</p>
            </div>
            <div className="price-container">
                <p id="price">valor: {price}</p>
            </div>
            
        </div>
        
    )
}