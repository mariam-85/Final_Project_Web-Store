import React from 'react'
import style from './index.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart'
import { useParams } from 'react-router-dom'

export default function ProductDescr({ title, price, discont_price, description, image }) {

    const discont = Math.round(((price - discont_price) / price )* 100)

    const dispatch = useDispatch();

    const { id } = useParams();

    const add_to_cart = () => dispatch(addToCart({id, title, image,  price, discont_price}))


  return (
    <div className={style.product_block}>
        <div className='wrapper'>
        <h2>{title}</h2>
            <div className={['wrapper', style.info_block].join(' ')}>
                <div>
                    <img src={`http://127.0.0.1:3333${image}`} alt={title} />
                </div>
                <div className={style.description_block}>
                    <div className={style.price}>
                        <p className={style.discont_price}>{discont_price}$</p>
                        <p className={style.total_price}>{price}$</p>
                        <p className={style.percents_price}>- {discont}%</p>
                    </div>
                    <button className={style.product_card_button} onClick={add_to_cart}>Add to cart</button>
                    <p className={style.description}>
                        {description}
                    </p>  
                </div>
            </div>
        </div>
    </div>
  )
}