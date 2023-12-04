import { Link } from "react-router-dom";
import "./Menu.css"
import { SlMenu, SlBookOpen, SlGlobe, SlPeople , SlList, SlWallet, SlNote  } from "react-icons/sl";
import { useState } from "react";


export function Menu() {

    const [expand, setExpand] = useState("lateral-menu")
    const [overlay, setOverlay] = useState("")

    const handleExpand = () => {
        if (expand == "lateral-menu") {
            setExpand("lateral-menu menu-expand");
            setOverlay("menu-overlay");
        } else {
            setExpand("lateral-menu");
            setOverlay("");
        }
    }

    return (
        <>
            <div className={overlay}>
                <nav className={expand}>
                    <div className="expand" onClick={handleExpand}>
                        <SlMenu />
                    </div>
                    <ul className="menu-ul">
                        <li className="menu-item">
                            <Link to={"/books"}>
                                <span className="menu-icon"><SlBookOpen /></span>
                                <span className="txt-link">Acervo</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to={"/add"}>
                                <span className="menu-icon"><SlNote  /></span>
                                <span className="txt-link">Adicionar ao acervo</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to={""}>
                                <span className="menu-icon"><SlGlobe /></span>
                                <span className="txt-link">Catálogo online</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to={""}>
                                <span className="menu-icon"><SlPeople  /></span>
                                <span className="txt-link">Clientes</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to={""}>
                                <span className="menu-icon"><SlList /></span>
                                <span className="txt-link">Pedidos</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to={""}>
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