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
  const [cartItems, setCartItems] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });  
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [addres, setAddres] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState(undefined); 
  const [question, setQuestion] = useState('');
  const totalPrice = cartItems.reduce((sum, obj) => sum + Number(obj.price), 0)
  
  useEffect(() => {
    async function fetchData() {
        try {
          const itemsResponse = await axios.get('/api/products');
        setIsLoading(false);
        setItems(itemsResponse.data.results);
        } catch (error) {
            alert('Ошибка при запросе данных :(');
            console.error(error);
        }
    }
    fetchData();
  }, []);



  return (
    <>    
    <AppContext.Provider value={{searchValue, setSearchValue, 
    items, setItems, cartItems, setCartItems, isLoading, setIsLoading, 
    addres, setAddres, name, setName, telephone, setTelephone, 
    email, setEmail, question, setQuestion, totalPrice,  }} >
    <Head/>
      <Routes>
      <Route index element={<Home />}/>
      <Route path="mobmenu" element={<MobMenu />}/>
      <Route path="about" element={<About />}/>
      <Route path="guarantee" element={<Guarantee />}/>
      <Route path="basket" element={<Basket />}/>
      <Route path="info" element={<Information />}/>
      <Route path="admin" element={<Admin />}/>
      
      <Route path="*" element={<Notfoundpage />} />
    </Routes>
    </AppContext.Provider>
    <Footer/>
    </>
  );
}

export default App;
