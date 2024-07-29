
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Products from './Components/Products/Products';
import Admin from './Components/Products/Admin';
import Test from './Components/Products/Test';
import CreateProduct from './Components/Products/CreateProduct';
import Update from './Components/Products/Update';
import Home from './Components/Products/Home';
import Navbarr from './Components/Navbar/Navbar';

function App() {
  return (
    <>
   

        <Router>

        <Navbarr/>

        <Routes>
        <Route path="/home" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/create" element={<CreateProduct/>}/>
    <Route path="/update-product/:id" element={<Update/>}/>
        </Routes>
          {/* </Route> */}
  

        </Router>
    
    </>
  );
}

export default App;
