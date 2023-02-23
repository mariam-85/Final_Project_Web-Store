import React, { useEffect } from 'react'
import { load_categories } from '../../requests/categories_request'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoriesContainer() { 

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(load_categories)
    }, []);


  return (
    <section className={style.cat_block}>
    <div className='wrapper'>
        <div className={style.cat_info}>
            <p className={style.title}>Catalogue</p>
            <Link to='/categories'>
                <button className={style.button}>All categories</button>
            </Link>
        </div>
        <div className={style.cat_container}>

            {
                    categories.slice(0, -1).map((el, index) => (<CategoryCard key={index} {...el} />))
            }

        </div>
    </div>
</section>
  )
}
