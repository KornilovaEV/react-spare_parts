import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Shop from './pages/Shop'
import About from './pages/About'
import Guarantee from './pages/Guarantee'
import Basket from './pages/Basket'
import {Adaptability} from './head';
import Footer from './components/Footer';

function App() {
  //const Menu = CompMenu;

  return (
    <>
    <Adaptability/>
    <Routes>
    
      {//<Route path ="/" element={<CompMenu />} >
        }
      <Route index element={<Home />}/>
      <Route path="login" element={<Login />}/>
      <Route path="registration" element={<Registration />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="about" element={<About />}/>
      <Route path="guarantee" element={<Guarantee />}/>
      <Route path="basket" element={<Basket />}/>



        {//<Route path="*" element={<Notfoundpage />} />
        }
      {//</Route>
      }
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
