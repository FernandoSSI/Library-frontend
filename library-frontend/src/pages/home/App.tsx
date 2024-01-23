import './App.css'
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';

const App=() => {

  

 

  return (
    <div className="container">
        <Menu/>
        <Outlet/>
      
    </div>
  )
}

export default App