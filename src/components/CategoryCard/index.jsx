import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'



export default function CategoryCard({ id, title, image }) {

  return (
    <Link  to={`/categories/${id}`} className={[ style.cat_card ].join(' ')}>
      <img src={`http://127.0.0.1:3333${image}`} alt="category" className={ style.cat_img } />
      <p className={ style.cat_title }>{ title }</p>
    </Link>
  )
}