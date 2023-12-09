import { AiOutlineSearch } from "react-icons/ai"
import "./SearchBar.css"
import { Link } from "react-router-dom"
import { GoPlus } from "react-icons/go";

interface SearchBarProps {
    onchange?: any,
    placeholder: string
}

export function SearchBar({onchange, placeholder}: SearchBarProps) {

    return (
        <>
            <div className="search-bar">
                {onchange && <>
                <div className="add-button">
                    <Link to={"/add"}><GoPlus/></Link>
                </div>
                <input type="search" name="search-bar" id="bar" onChange={onchange} placeholder={placeholder} />
                </>}

            </div>

        </>
    )
}