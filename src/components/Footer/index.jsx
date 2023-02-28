import React from 'react'
import style from './index.module.css'
import icon_1 from './media/Icon_1.png';
import icon_2 from './media/Icon_2.png';

export default function Footer() {
    return (
    <footer className={style.footer_block} id='contacts'>
        <div className={['wrapper', style.footer_container].join(' ')}>
            <div className={style.contacts_block}>
                <h2 className={style.contacts_block_title}>Contact</h2>
                <p className={style.phone_info}>+49 999 999 99 99</p>
                <div className={style.messanger_icons}>
                    <div  className={style.instagram_icon}>
                    <a href='https://www.instagram.com/'>
                        <img src={icon_1} alt='instagram'/>
                    </a>
                    <p>Instagram</p>
                    </div>
                    <div className={style.whatsApp_icon}>
                    <a href='https://www.whatsapp.com/'>
                        <img src={icon_2} alt='whatsapp'/>
                    </a>
                    <p>WhatsApp</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className={style.address_title}>Address</h2>
                <p className={style.address_content}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                <p className={ style.working_mode}>Working Hours:
                    <p className={style.working_hours}>24 hours a day</p>
                </p>
            </div>
        </div>
    </footer>
  )
}