import "./Navbar.css"
import logo from "../imgs/logo.png"
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";


export function Navbar(){
    return (
        <>
            <div className="logo-container">
                <div className="icon">
                    <Link to={"/"}><img src={logo} alt="" /></Link>
                </div>
                <div className="title">
                    <Link to={"/"}><h2>sebo e livraria</h2></Link>
                    <Link to={"/"}><h1>carlos Drummond </h1></Link>  
                </div>
            </div>
            <div className="search-container">
                <div className="search-bar">
                   {/*<input type="search" name="search-bar" id="bar" onChange={e => onchange}/>*/}
                    {/*<button id="search-buttom" type="submit"><AiOutlineSearch/></button>*/}
                </div>
                <div className="links">
                    {/*depois mudar de a, par Link */}
                    <Link to={"/books"}>LIVROS</Link>
                    <Link to={"/add"}>ADICIONAR</Link> 
                    <Link to={"/"}>EDITAR</Link> 
                    <Link to={"/"}>PEDIDOS</Link> 
                    <Link to={"/"}>RECEITA</Link>
                </div>
            </div>
        </>
    )
}