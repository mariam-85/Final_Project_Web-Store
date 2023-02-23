import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from '../ProductCard'
import { load_products } from '../../requests/products_request'
import style from './index.module.css'

export default function ProductsContainer() {

    const dispatch = useDispatch();

    const products = useSelector( state => state.products);

    useEffect(() => {dispatch(load_products)}, []);
    
return (
    <section>
        <div className='wrapper'>
            <h2 className={style.title}>All products</h2>
            <div className={style.container}>
                {
                    products.map(el => <ProductCard key={el.id} {...el}/>)
                }
            </div>
        </div>
    </section>
   
  )
}