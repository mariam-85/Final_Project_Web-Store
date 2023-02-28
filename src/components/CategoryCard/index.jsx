import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'



export default function CategoryCard({ id, title, image }) {

  return (
    <Link  to={`/categories/${id}`} className={[style.categorie_card].join(' ')}>
      <img src={`http://127.0.0.1:3333${image}`} alt='category' className={style.categorie_card_image} />
      <p>{ title }</p>
    </Link>
  )
}