import "./Navbar.css"
import logo from "../../imgs/logo.png"



interface NavbarProps{
    
}

export function Navbar({  } : NavbarProps){
    return (
    
        <div className="navbar-container">
            <div className="icon">
                <img src={logo} alt="" />
            </div>
            <div className="title">
                <h2>sebo e livraria</h2>
                <h1>carlos Drummond </h1>

            </div>
            

        </div>
        
    )
}