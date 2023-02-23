import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart'




export default function ProductCard({ id, title, image, price, discont_price, categoryId }) {

    const discont = Math.round(((price - discont_price) / price )* 100);

    const dispatch = useDispatch();

    

    const add_to_cart = () => dispatch(addToCart({id: image, title, price, discont_price}))

  return (

    <div className={style.prod_card}>
      <div>
          <a href={`/categories/${categoryId}/products/${id}`}>
        <img src={`http://127.0.0.1:3333${image}`} alt={title} className={style.prod_img}/>
        </a>
        {/* <button>Add to cart</button> */}
        <button className={style.product_card_btn} onClick={add_to_cart}>Add to cart</button>
      </div>
      <div className={style.price_block}>
        <p className={style.disc_price}>{ discont_price }$</p>
        <p className={style.price}>{ price }$</p>
        <p className={style.discont}>{ discont }%</p>
      </div>
      <Link to={`/categories/${categoryId}/products/${id}`} className={style.title}>{ title }</Link>
    </div>
  )
}