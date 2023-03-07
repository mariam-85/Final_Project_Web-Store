import React from 'react'
import Cart from '../../components/Cart'
import { useSelector,useDispatch } from 'react-redux'
import { BsCartX } from 'react-icons/bs'
import style from './index.module.css'
import {RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { clearCart } from '../../store/reducers/cart'

export default function CartPage() {

const {register, handleSubmit, formState: {errors}, reset } = useForm();

const submit = (data) => {
    console.log(data);
    reset();            
}

const numberRegister = register('number', {
    required: '*The field is required',
    pattern: {
        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        message: '*Not valid format'
    }
})

  const cart = useSelector(state => state.cart);

  const total = cart.reduce((total,el) => total + el.discont_price * el.count, 0)

  const dispatch = useDispatch();

  // const clear_cart = () => dispatch(clearCart())
    
  return (
  
    <section className={style.cart_products}>
      <div className='wrapper'>
        <div>
          <h2>Shopping cart</h2>
            <div className={style.cart_nav}>
                <p>Home / Cart</p>
              <Link to='/categories' className={style.cart_nav_link}>
                <p>Back to the store </p>
                <RightOutlined className={style.nav_button_back}/>
              </Link>
            </div>
        </div>
      {
        cart.length === 0 
        ? <div className={style.if_empty_cart}>
              <BsCartX className={style.cart_icon}/>
              <p>Your cart is emtpy</p>
          </div>         
        :
          <div className={style.cart_block}>
            <div className={style.cart_content}>
              {
                cart.map(el => <Cart key={el.id} {...el}/>)
              }
            </div>
            <div className={style.order_form_block}>
              <p className={style.order_form_title}>Order details</p>
              <div className={style.total_block}>
                <p className={style.total_block_title}>Total</p>
                <p className={style.total_price}>{total}$</p>
              </div>
              <form  onSubmit={handleSubmit(submit)} className={style.cart_form}>
                <input type='number' name='phone number' placeholder='Phone number'  {...numberRegister}/>
                <div className={style.error_message}>
                    {errors.number && <p>{errors.number?.message}</p>}
                </div>
                <button className={style.cart_form_button}>Order</button>
                {/* <button className={style.clear_btn} onClick={clear_cart}>Clear cart</button>*/}
              </form>
            </div>
          </div>
        }
      </div>
    </section>
  )} 
 