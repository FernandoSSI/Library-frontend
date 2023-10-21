import './App.css'
import { Navbar } from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App=() => {

  

 

  return (
    <div className="container">
        <Navbar/>
        <Outlet/>
      
    </div>
  )
}

export default App