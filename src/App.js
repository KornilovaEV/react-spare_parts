import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Admin   from './pages/Admin'
import Information from './pages/Information'
import About from './pages/About'
import Guarantee from './pages/Guarantee'
import Notfoundpage from './pages/Notfoundpage';
import Basket from './components/basket/Basket'
import Head from './head';
import MobMenu from './head/mob/Menu'; 
import Footer from './footer';
import axios from 'axios';
import AppContext from './context';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);  
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)
  
  useEffect(() => {
    async function fetchData() {
        try {
        const cartRespons = await axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/cart');
        const itemsRespons = await axios.get('https://62cec64c486b6ce8264c6981.mockapi.io/items');

        setIsLoading(false);
        setCartItems(cartRespons.data);
        setItems(itemsRespons.data);
        } catch (error) {
            alert('Ошибка при запросе данных :(');
            console.error(error);
        }
    }
    fetchData();
  }, []);


  return (
    <>    
    <AppContext.Provider value={{searchValue, setSearchValue, items, setItems, 
      cartItems, setCartItems, isLoading, setIsLoading, totalPrice, }} >
    <Head/>
      <Routes>
      <Route index element={<Home />}/>
      <Route path="mobmenu" element={<MobMenu />}/>
      <Route path="shop" element={<Information />}/>
      <Route path="about" element={<About />}/>
      <Route path="guarantee" element={<Guarantee />}/>
      <Route path="basket" element={<Basket />}/>
      <Route path="admin" element={<Admin />}/>
      
      <Route path="*" element={<Notfoundpage />} />
    </Routes>
    </AppContext.Provider>
    <Footer/>
    </>
  );
}

export default App;
