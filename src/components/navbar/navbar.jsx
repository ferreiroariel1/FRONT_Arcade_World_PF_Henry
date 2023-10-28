import { Link, NavLink, useLocation } from 'react-router-dom';
import Search from '../search/Search';
import style from './Navbar.module.css';
import logo from './logo1Sinfondo.png'

function Navbar() {
  const location = useLocation();
  
  return (
    <div className={style.navbar}>
      
    <img src={logo} alt="logo" className={style.logo}/>
    {location.pathname !== '/auth' && (
        <Search/>
    )}
    <div className={style.navContent}>
      <NavLink className={style.homeForm} to= '/'>Home</NavLink>
      <NavLink className={style.homeForm} to= '/store'>Store</NavLink>
      <NavLink className={style.homeForm} to= '/library'>Library</NavLink>
      <NavLink className={style.homeForm} to= '/about'>About</NavLink>
    </div>
    <div>
    {location.pathname !== '/auth' && (
      <>
        <div className={style.butn}>
          <Link to= '/cart'><h2>🛒</h2></Link>
          <Link to= '/auth'><button className={style.button} >Log In</button></Link>
        </div>
        
      </>
    )}
    </div>
  </div>
  )
}

export default Navbar;