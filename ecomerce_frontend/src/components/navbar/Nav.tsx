
import { Link } from 'react-router-dom'
import "./Nav.scss"
import {IoIosArrowDown, IoIosHeartEmpty} from "react-icons/io"
import {AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"

function Nav() {
  return (
    <div className="nav">
      <div className="wrapper">

      <div className="nav__left">
        <div className="item">
          <img src="/img/en.png" alt="" />
          <IoIosArrowDown />
        </div>
        <div className="item">
          <span>USD</span>
          <IoIosArrowDown />
        </div>
        <div className="item">
          <Link to="/products/1">Women</Link>
        </div>
        <div className="item">
          <Link to="/products/2">Men</Link>
        </div>
        <div className="item">
          <Link to="/products/3">Children</Link>
        </div>
      </div>
      <div className="nav__middle">
        <Link to="/"> MyLoGo </Link>
      </div>
      <div className="nav__right">
        <div className="item">
        <Link to="/">Homepage</Link>
      </div>
     
        <div className="item">
        <Link to="/">About</Link>
        </div>
        <div className="item">
        <Link to="/">Contact</Link>
        </div>
        <div className="item">
        <Link to="/">Store</Link>
        </div>
        <div className="icons">
          <AiOutlineSearch />
          <AiOutlineUser />
          <IoIosHeartEmpty />
          <div className="cartIcon">
            <AiOutlineShoppingCart />
            <span className='cartCount'>0</span>
          </div>
        </div>
        
      </div>
      
      </div>
    </div>

  )
}

export default Nav