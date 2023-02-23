import React from 'react'
import Cart from '../../components/Cart'
import { useSelector,useDispatch } from 'react-redux'
import { BsCartX } from 'react-icons/bs'
import style from './index.module.css'
import {RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { clearCart } from '../../store/reducers/cart'

export default function CartPage() {

  const cart = useSelector(state => state.cart);

  const total = cart.reduce((total,el) => total + el.discont_price * el.count, 0)

  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart())
    
  return (
  
    <section className={style.cart_page}>
      <div className='wrapper'>
        <div>
          <h2>Shopping cart</h2>
            <div className={style.cart_nav}>
                <p>Home / Cart</p>
              <Link to='/categories' className={style.cart_nav_btn}>
                <p>Back to the store </p>
                <RightOutlined className={style.btn_back}/>
              </Link>
            </div>
        </div>
      {
        cart.length === 0 
        ? <div className={style.empty_cart}>
              <BsCartX className={style.cart_icon}/>
          </div>         
        :
          <div className={style.cart_block}>
            <div className={style.cart_section}>
              {
                cart.map(el => <Cart key={el.id} {...el}/>)
              }
            </div>
            <div className={style.form_block}>
              <p className={style.form_title}>Order details</p>
              <div className={style.total_block}>
                <p className={style.total_title}>Total</p>
                <p className={style.total_price}>{total}$</p>
              </div>
              <form className={style.cart_form}>
                <input type="number" placeholder='Phone number' name='number'/>
                <button className={style.submit_btn}>Order</button>
                <button className={style.clear_btn} onClick={clear_cart}>Clear cart</button>             
              </form>
            </div>
          </div>
        }
      </div>
    </section>
  )} 
