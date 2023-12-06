import { Link } from "react-router-dom";
import "./Menu.css"
import { SlMenu, SlBookOpen, SlGlobe, SlPeople , SlList, SlWallet, SlNote  } from "react-icons/sl";
import { useState } from "react";


export function Menu() {

    const [expand, setExpand] = useState("lateral-menu")
    const [overlay, setOverlay] = useState("")
    const [activeLink, setActiveLink] = useState('/');

    const handleExpand = () => {
        if (expand == "lateral-menu") {
            setExpand("lateral-menu menu-expand");
            setOverlay("menu-overlay");
        } else {
            setExpand("lateral-menu");
            setOverlay("");
        }
    }

    const handleLinkClick = (to:any) => {
        setActiveLink(to);
      };

    return (
        <>
            <div className={overlay}>
                <nav className={expand}>
                    <div className="expand" onClick={handleExpand}>
                        <SlMenu />
                    </div>
                    <ul className="menu-ul">
                        <li className={activeLink === '/books' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/books"} 
                            onClick={()=>handleLinkClick("/books")}
                            className={activeLink === '/books' ? 'active' : ''}>
                                <span className="menu-icon"><SlBookOpen /></span>
                                <span className="txt-link">Acervo</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/add' ? 'active menu-item' : 'menu-item'} >
                            <Link to={"/add"} onClick={()=>handleLinkClick("/add")}>
                                <span className="menu-icon"><SlNote  /></span>
                                <span className="txt-link">Adicionar ao acervo</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/onlinecatalog' ? 'active menu-item' : 'menu-item'} >
                            <Link to={"/onlinecatalog"} onClick={()=>handleLinkClick("/onlinecatalog")}
                            >
                                <span className="menu-icon"><SlGlobe /></span>
                                <span className="txt-link">Catálogo online</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/clients' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/clients"} onClick={()=>handleLinkClick("/clients")}>
                                <span className="menu-icon"><SlPeople  /></span>
                                <span className="txt-link">Clientes</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/requests' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/requests"} onClick={()=>handleLinkClick("/requests")}>
                                <span className="menu-icon"><SlList /></span>
                                <span className="txt-link">Pedidos</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/wallet' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/wallet"} onClick={()=>handleLinkClick("/wallet")}>
                                <span className="menu-icon"><SlWallet /></span>
                                <span className="txt-link">Caixa</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}