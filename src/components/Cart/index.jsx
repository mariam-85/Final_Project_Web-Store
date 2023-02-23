import React from 'react'
import style from './index.module.css'
import { BsTrash } from "react-icons/bs"
import { HiOutlineMinus } from "react-icons/hi"
import { HiPlus } from "react-icons/hi"
import { useDispatch } from 'react-redux'
import { incrementProduct, decrementProduct, deleteProduct } from '../../store/reducers/cart'

export default function CartItem({ id, image, title, price, discont_price,count }) {

  const dispatch = useDispatch();

  const incr_prod = () => dispatch(incrementProduct(id));
  const decr_prod = () => dispatch(decrementProduct(id));
  const delete_prod = () => dispatch(deleteProduct(id));

  return (
    <div className={style.cart_item}>
    <img src={`http://127.0.0.1:3333${image}`} alt={title} className={style.cart_item_img}/>
    <div className={style.title_btn}>
      <p>{title}</p>
      <div className={style.cart_btn_count}>
        <button onClick={decr_prod}><HiOutlineMinus /></button>
        <p>{count}</p>
        <button onClick={incr_prod}><HiPlus /></button>
      </div>
    </div>

    <div className={style.price_block}>
      <p className={style.discont_price}>{discont_price}$</p>
      <p className={style.full_price}>{price}$</p>
    </div>
    <BsTrash className={style.trash_icon} onClick={delete_prod} />
</div>
  )
}