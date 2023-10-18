import "./card.css"

interface CardProps{
    price: number,
    title: string,
    author:string
}

export function Card({ price, title, author } : CardProps){
    return (
        
        <div className="card">
            <h2>título: {title} </h2>
            <p>autor: {author} </p>
            <p>valor: {price}</p>

        </div>
        
    )
}