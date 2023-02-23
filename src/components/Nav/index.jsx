import React from 'react'
import cart_img from './media/cart_pic.png'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useSelector } from 'react-redux'

export default function Nav() {

  const cart = useSelector(state => state.cart);

  const cart_count = cart.reduce((total,item) => total + item.count, 0 )

  return (
    <nav className={style.nav_menu}>
        <Link to='categories'>
          <p>Categories</p>
        </Link>
        <AnchorLink href='#coupon'>
          <p>Coupon</p>
        </AnchorLink>
        <AnchorLink href='#discount'>
          <p>Discount</p>
        </AnchorLink>
        <AnchorLink  href='#contacts'>
          <p>Contact</p>
        </AnchorLink>
          <Link to='cart'>
            <div className={style.cart_nav}>
              <img src={cart_img} alt="logo" className={style.cart_icon}/>
              {
                cart.length !== 0 ? <p>{cart_count}</p> : ''
              }
            </div>
          </Link>
    </nav>
  )
}


// import React from 'react'
// import { Link } from 'react-router-dom'
// import style from './index.module.css'
// import cart from './media/cart_pic.png'


// export default function Nav() {
//   return (

//     <nav className={style.header_nav}>
//         <ul>

//             <Link to="categories" className={style.link}>
//             <li>Categories</li>
//             </Link>
//             <li>Coupon</li> 
//             <li>Promotions</li> 
//             <li>Contact</li>  
//             <Link to="cart/">          
//             <img src={cart} alt="logo" className={style.cart}/>
//             </Link> 
//             </ul>
//     </nav>

//   )
// }





