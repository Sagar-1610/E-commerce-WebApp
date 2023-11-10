
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShopCategory from './components/ShopCategory';
import Product from './components/Product';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import men_banner from './img/banner_mens.png';
import women_banner from './img/banner_women.png';
import kids_banner from './img/banner_kids.png';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner ={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
