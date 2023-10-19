import "./Navbar.css"
import logo from "../imgs/logo.png"
import { AiOutlineSearch } from 'react-icons/ai';



interface NavbarProps{
    
}

export function Navbar({  } : NavbarProps){
    return (
        <>
            <div className="logo-container">
                <div className="icon">
                    <img src={logo} alt="" />
                </div>
                <div className="title">
                    <h2>sebo e livraria</h2>
                    <h1>carlos Drummond </h1>
                </div>
            </div>
            <div className="search-container">
                <div className="search-bar">
                    <input type="search" name="search-bar" id="bar" />
                    <button id="search-buttom" type="submit"><AiOutlineSearch/></button>
                </div>
                <div className="links">
                    {/*depois mudar de a, par Link */}
                    <a href="">LIVROS</a>
                    <a href="">ADICIONAR </a>
                    <a href="">EDITAR </a>
                    <a href="">PEDIDOS </a>
                    <a href="">RECEITA</a>
                </div>
            </div>
        </>
    )
}