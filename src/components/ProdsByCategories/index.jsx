import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../requests/prod_category';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import style from './index.module.css'
import { sortProducts, searchProducts } from '../../store/reducers/prod_category';

export default function ProdsByCategories() {

    const  dispatch = useDispatch();

    const { category } = useParams();

    const prodsBycategory = useSelector(state => state.prodsByCategory)

    useEffect(() => {
        dispatch(getProductsByCategory(category))
    }, [])

    const sort_product = ( event ) => {
        dispatch(sortProducts(event.target.value))
    } 
    
    const search_products = event => {
        event.preventDefault();
        const { min , max } = event.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        dispatch(searchProducts({ min_value, max_value }));
    
    }

    return (
    <section className={style.products_by_category_block}>
        <div className='wrapper'>
            {/* <p>{ category.title }</p> */}
            <div className={style.sorting_block}>
                <div>
                    <span>Price </span>
                    <form className={style.search_form} onSubmit={search_products}>
                        <input type="number" placeholder='from' name='min'  min='0'/>
                        <input type="number" placeholder='to' name='max'  min='0'/>
                        <button>Search</button>
                    </form>
                </div>

                <div>
                    <span>Sorted </span>
                        <select className={style.select_form} onInput={sort_product}>
                            <option value='default'>by default</option>
                            <option value='title'>by title</option>
                            <option value='price'> by price</option>
                        </select>
                </div>
            </div>
            
            <div className={style.products_container}>
                {
                    prodsBycategory
                    .filter(el => !el.hide_elem)
                    .map(el => <ProductCard key={el.id} {...el} />)
                }
            </div>
        </div>
    </section>
  )
}






// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductsByCategory } from '../../requests/prod_category';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../ProductCard';
// import style from './index.module.css'
// import { sortProducts, searchProducts } from '../../store/reducers/prod_category';
// // import { getCategory } from '../../requests/category.js'

// export default function ProdsCategoryContainer() {

//     const  dispatch = useDispatch();

//     // const { categoryId } = useParams();

//     const { category } = useParams();

//     const prodsBycategory = useSelector(state => state.prodsByCategory)

//     // const category = useSelector( state => state.category)

//     // useEffect(() => {
//     //     dispatch(getCategory(categoryId))
//     //     dispatch(getProductsByCategory(categoryId))
//     // }, [])

//     useEffect(() => {
//         dispatch(getProductsByCategory(category))
//     }, [])

//     const sort_product = ( event ) => {
//         dispatch(sortProducts(event.target.value))
//     } 
    
//     const search_products = event => {
//         event.preventDefault();
//         const { min , max } = event.target;
//         const min_value = min.value || 0;
//         const max_value = max.value || Infinity;
//         dispatch(searchProducts({ min_value, max_value }));
    
//     }

//     return (
//     <section className={style.products_by_categories_block}>
//         <div className='wrapper'>
//             <h2>{ category.title }</h2>
//             <div className={style.sorting}>
//                 <div>
//                     <span className={style.form_title}>Price </span>
//                     <form className={style.search_form} onSubmit={search_products}>
//                         <input type="number" placeholder='from' name='min'  min='0'/>
//                         <input type="number" placeholder='to' name='max'  min='0'/>
//                         <button>Search</button>
//                     </form>
//                 </div>

//                 <div>
//                     <span className={style.form_title}>Sorted </span>
//                         <select className={style.sort_select} onInput={sort_product}>
//                             <option value='default'>by default</option>
//                             <option value='title'>by title</option>
//                             <option value='price'> by price</option>
//                         </select>
//                 </div>
//             </div>
            
//             <div className={style.products_by_categories_container}>
//                 {
//                     prodsBycategory
//                     .filter(el => !el.hide_elem)
//                     .map(el => <ProductCard key={el.id} {...el} />)
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }
