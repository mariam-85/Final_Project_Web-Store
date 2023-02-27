import React from 'react'
import style from './index.module.css'
import image from './media/image 2.png'

export default function SeasonSaleBlock() {
  return (
    <section className={style.sale_block} id='sale_block'>
        <div className={['wrapper',style.sale_content].join(' ')}>
            <h1 className={style.sale_title}>Sale</h1>
            <h1 className={style.new_season_title}>New season</h1>
            <button className={style.sale_button}>Sale</button>
            <button className={style.learn_button}>Learn more</button>
        </div>
        {/* <img src={ image } alt="image" className={ style.sale_image }/> */}
    </section>
  )
}
