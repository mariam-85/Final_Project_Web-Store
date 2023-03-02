import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart'




export default function ProductCard({ id, title, image, price, discont_price, categoryId }) {

    const discount = Math.round(((price - discont_price) / price )* 100);

    const dispatch = useDispatch();

    const add_to_cart = () => dispatch(addToCart({id: title, image, price, discont_price}))

  return (

    <div className={style.product_card}>
      <div>
          <a href={`/categories/${categoryId}/products/${id}`}>
        <img src={`http://127.0.0.1:3333${image}`} alt={title} className={style.product_image}/>
        </a>
        <button onClick={add_to_cart}>Add to cart</button>
      </div>
      <div className={style.info_block}>
        <p className={style.discount_price}>{ discont_price }$</p>
        <p className={style.full_price}>{ price }$</p>
        <p className={style.discount_amount}>{ discount }%</p>
      </div>
      <Link to={`/categories/${categoryId}/products/${id}`} className={style.product_title}>{ title }</Link>
    </div>
  )
}