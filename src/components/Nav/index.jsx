import React from 'react'
import cart_img from './media/cart_pic.png'
import style from './index.module.css'
import { Link } from 'react-router-dom'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useSelector } from 'react-redux'
import { MenuOutlined } from '@ant-design/icons'
import { HashLink } from 'react-router-hash-link';

export default function Nav({ menuActive, setMenuActive }) {

const cart = useSelector(state => state.cart);

const cart_count = cart.reduce((total, item) => total + item.count, 0 )

  return (
    <nav className={style.nav_block}>
      <div className={[ style.nav_menu, menuActive ? style.active : '' ].join(' ')}>
        <HashLink to='categories'>
          <p>Catalogs</p>
        </HashLink>
        <HashLink smooth to='/#sale_block'>
          <p>Coupon</p>
        </HashLink>
        <HashLink smooth to='/#discount'>
          <p>Discount</p>
        </HashLink>
        <HashLink  smooth to='/#contacts'>
          <p>Contact</p>
        </HashLink>
        
        <div className={style.nav_cart}>
          <Link to='cart'>
              <img src={cart_img} alt="logo" className={style.cart_picture}/>
              {
                cart.length !== 0 ? <p>{ cart_count }</p> : ''
              }
        </Link>
        </div>
      </div>
          <MenuOutlined className={style.menu_icon} onClick={() => setMenuActive(menuActive ? false : true)}/>
    </nav>
  )
}






