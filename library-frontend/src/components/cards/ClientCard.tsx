import './ClientCard.css'

export interface ClientCardProps{
    id?: any;
    name: string;
    number: number;
    city: string;
    nbh: string;
    street: string;
    hn: number;
}


export function ClientCard({id, name, number, city, nbh, street, hn}:ClientCardProps) {

    return (
        <>
            <div className='card-overlay'>
                <div className="client-card">
                    <span className='cardc-name'><p id="name"> {name} </p></span>
                    <span className='cardc-number'><p id="number">{number}</p></span>
                    <span className='cardc-city'><p id='city'>{city}</p></span>
                    <span className='cardc-nbh'><p id="nbh">{nbh}</p></span>
                    <span className='cardc-street'><p id="street">{street}</p></span>
                    <span className='cardc-hn'><p id="hn">{hn}</p></span>
                </div>

            </div>
        </>
    )
}