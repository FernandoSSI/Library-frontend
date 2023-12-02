import { AiOutlineSearch } from "react-icons/ai"
import "./SearchBar.css"
import { Link } from "react-router-dom"
import { GoPlus } from "react-icons/go";

interface SearchBarProps {
    onchange?: any
}

export function SearchBar({onchange}: SearchBarProps) {

    return (
        <>
            <div className="search-bar">
                {onchange && <>
                <div className="add-button">
                    <Link to={"/add"}><GoPlus/></Link>
                </div>
                <input type="search" name="search-bar" id="bar" onChange={onchange} placeholder="Busque por título, autor ou categoria!" />
                </>}

            </div>

        </>
    )
}