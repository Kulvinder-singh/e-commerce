import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComp from './Layout/Navbar';
import Footer from './Layout/Footer';
import Everything from './Pages/Everything';
import Women from './Pages/Women';
import Accessories from './Pages/Accessories';
import Login from './component/Login';
import Cart from './component/Cart';
import { useState } from 'react';
import Error from './Pages/Error';
import AllProducts from './Pages/Allproducts';
import Men from './Pages/Men';


function App() {
  const [addCart, setAddCart] = useState(0);
  return (
    <>
      <BrowserRouter>
        <NavbarComp addCart={addCart} />
        <Routes>
          <Route path='/' element={<Everything />} />
          <Route path='/women' element={<Women />} />
          <Route path='/men/:id/:product' element={<AllProducts setAddCart={setAddCart} addCart={addCart} />} />
          <Route path='/men' element={<Men />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Error />} />
        </Routes >
        <Footer />
      </BrowserRouter>
    </>





  );
}

export default App;
