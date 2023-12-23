import { Link } from "react-router-dom";
import "./Menu.css"
import { SlMenu, SlBookOpen, SlGlobe, SlPeople , SlList, SlWallet, SlNote, SlUserFollow} from "react-icons/sl";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Menu() {

    const [expand, setExpand] = useState("lateral-menu")
    const [overlay, setOverlay] = useState("")
    const [activeLink, setActiveLink] = useState(window.location.href);
    const location = useLocation();
    
    useEffect(() => {
        setActiveLink(window.location.href)
      }, [location.pathname]);


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
                        <li className={activeLink === 'http://localhost:5173/books' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/books"} 
                            
                            className={activeLink === '/books' ? 'active' : ''}>
                                <span className="menu-icon"><SlBookOpen /></span>
                                <span className="txt-link">Acervo</span>
                            </Link>
                        </li>

                        <li className={activeLink === 'http://localhost:5173/addbooks' ? 'active menu-item' : 'menu-item'} >
                            <Link to={"/addbooks"}>
                                <span className="menu-icon"><SlNote  /></span>
                                <span className="txt-link">Adicionar ao acervo</span>
                            </Link>
                        </li>

                        <li className={activeLink === 'http://localhost:5173/onlinecatalog' ? 'active menu-item' : 'menu-item'} >
                            <Link to={"/onlinecatalog"}
                            >
                                <span className="menu-icon"><SlGlobe /></span>
                                <span className="txt-link">Catálogo online</span>
                            </Link>
                        </li>

                        <li className={activeLink === 'http://localhost:5173/clients' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/clients"}>
                                <span className="menu-icon"><SlPeople  /></span>
                                <span className="txt-link">Clientes</span>
                            </Link>
                        </li>

                        <li className={activeLink === 'http://localhost:5173/addclients' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/addclients"} onClick={()=>handleLinkClick("/addclients")}>
                                <span className="menu-icon"><SlUserFollow /></span>
                                <span className="txt-link">Adicionar cliente</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/orders' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/orders"} onClick={()=>handleLinkClick("/orders")}>
                                <span className="menu-icon"><SlList /></span>
                                <span className="txt-link">Pedidos</span>
                            </Link>
                        </li>

                        <li className={activeLink === '/addorders' ? 'active menu-item' : 'menu-item'}>
                            <Link to={"/addorders"} onClick={()=>handleLinkClick("/addorders")}>
                                <span className="menu-icon"><MdFormatListBulletedAdd /></span>
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