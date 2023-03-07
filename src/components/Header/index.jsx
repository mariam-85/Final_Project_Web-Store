import React, { useState } from 'react'
import Nav from '../Nav'
import logo from './media/logo_pic.png'
import style from './index.module.css'
import { Link } from 'react-router-dom'

    export default function Header() {

        const[ menuActive, setMenuActive ] = useState (true);

        return (
        <section>
            <div className={['wrapper', style.header].join(' ')}>
                <div className={style.logo_button}>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to='products'>
                        <button className={style.catalog_button}>Catalog</button>
                    </Link>
                </div>
                <Nav menuActive={menuActive} setMenuActive={setMenuActive}/>
            </div>
        </section>
    
    )
}

