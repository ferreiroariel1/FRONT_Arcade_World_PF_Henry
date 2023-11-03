import { Routes, Route } from 'react-router-dom';
import { About, Home, Store, Detail } from './views/index.js';
import Navbar from './components/navbar/navbar.jsx';
import Cart from './components/cart/cart.jsx';
import Auth from './components/auth/Auth.jsx';
import Profile from './components/profile/Profile.jsx';
import Footer from './components/footer/Footer.jsx'

import './App.css'


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path='/user/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  )

}

export default App