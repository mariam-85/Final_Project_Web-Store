import React from 'react'
import style from './index.module.css'
import image from './media/image 2.png'

export default function SaleBanner() {
  return (
    <section className={style.sale_container} id='coupon'>
        <div className={['wrapper',style.sale_info].join(' ')}>
            <h1 className={style.sale_title}><span className={style.accent}>Sale</span>start of a new season</h1>
            <button className={style.sale_btn}>All sale</button>
            <button className={style.details_btn}>More</button>
        </div>
        <img src={image} alt="image" className={style.sale_img}/>
    </section>
  )
}


// import React from 'react'
// import style from './index.module.css'

// export default function SeasonSaleBlock
// () {
//   return (
//     <section className={style.section}>

//         <div className={['wrapper', style.sale_block].join(' ')}>   
            
//             <p className={style.season}>New season</p> 
//             <p className={style.sale}>sale</p>
//             <div>
//             <button className={style.promotions}>Promotions</button>
//             <button className={style.more}>Learn more</button>
//             </div>
            
//         </div>
//     </section>
//   )
// }
