import React, { useEffect } from 'react'
import { random_load_products } from '../../requests/random_products'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard';
import style from './index.module.css'

export default function SaleContainer() { 

    const dispatch = useDispatch();
    const products = useSelector(state => state.random_products);

    useEffect(() => {
        dispatch(random_load_products)
    }, []);


  return (
    <section className={style.products_block}>
    <div className='wrapper'>
        <div className={style.products_block_content}>
            <p className={style.products_block_title}>Sale</p>
        </div>
        <div className={style.products_container}>

            {
                    products.slice(0, 3).map((el, index) => (<ProductCard key={index} {...el} />))
            }
        </div>
    </div>
</section>
  )
}
