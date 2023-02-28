import React, { useEffect } from 'react'
import { load_categories } from '../../requests/categories_request'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoriesContainer({ limit = true }) { 

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(load_categories)
    }, []);

    const limitedBlock = categories.slice(0, limit);


  return (
    <section className={style.categories_block}>
    <div className='wrapper'>
        <div className={style.categories_content}>
            <p className={style.categories_block_title}>Catalog</p>
            <Link to='/categories'>
                <button className={style.categories_block_button}>All categories</button>
            </Link>
        </div>
        <div className={style.categories_container}>

        {
                        limitedBlock.map((el, index) => <CategoryCard key={index} {...el}/>)  
                    }

        </div>
    </div>
</section>
  )
}

// import React, { useEffect } from 'react'
// import { load_categories } from '../../requests/categories_request'
// import { useDispatch, useSelector } from 'react-redux'
// import CategoryCard from '../CategoryCard';
// import style from './index.module.css'
// import { Link } from 'react-router-dom'

// export default function CategoriesContainer() { 

//     const dispatch = useDispatch();
//     const categories = useSelector(state => state.categories);

//     useEffect(() => {
//         dispatch(load_categories)
//     }, []);


//   return (
//     <section className={style.categories_block}>
//     <div className='wrapper'>
//         <div className={style.categories_content}>
//             <p className={style.categories_block_title}>Catalog</p>
//             <Link to='/categories'>
//                 <button className={style.categories_block_button}>All categories</button>
//             </Link>
//         </div>
//         <div className={style.categories_container}>

//             {
//                     categories.slice(0, -1).map((el, index) => (<CategoryCard key={index} {...el} />))
//             }

//         </div>
//     </div>
// </section>
//   )
// }

