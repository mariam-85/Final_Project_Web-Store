import React from 'react'
import style from './index.module.css'
import  {RxCross2 } from "react-icons/rx"
import { BiMinus } from "react-icons/bi"
import { BiPlus } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { incrementProduct, decrementProduct, deleteProduct } from '../../store/reducers/cart'


  export default function Cart({ id, title, price, image,  count, discont_price }) {

  const dispatch = useDispatch();

  const incr_prod = () => dispatch(incrementProduct(id));
  const decr_prod = () => dispatch(decrementProduct(id));
  const delete_prod = () => dispatch(deleteProduct(id));

  return (
    <div className={style.product_card}>
    <img src={`http://127.0.0.1:3333${image}`} alt={title} className={style.product_card_img}/>
    <div className={style.product_content}>
      <p>{title}</p>
      <div className={style.cart_count_form}>
        <button onClick={decr_prod}><BiMinus /></button>
        <p>{count}</p>
        <button onClick={incr_prod}><BiPlus /></button>
      </div>
    </div>

    <div className={style.price_block}>
      <p className={style.discont_price}>{discont_price}$</p>
      <p className={style.full_price}>{price}$</p>
    </div>
    <RxCross2 className={style.cross_icon} onClick={delete_prod} />
</div>
  )
}