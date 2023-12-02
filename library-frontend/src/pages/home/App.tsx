import './App.css'
import { Navbar, NavbarSearch } from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';

const App=() => {

  

 

  return (
    <div className="container">
        {/*<Navbar/>*/}
        <Menu/>
        <Outlet/>
      
    </div>
  )
}

export default App