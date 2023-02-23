import React from 'react'
import style from './index.module.css'
import icon_1 from './media/Icon_1.png';
import icon_2 from './media/Icon_2.png';

export default function Footer() {
    return (
    <footer className={ style.footer } id='contacts'>
        <div className={['wrapper', style.footer_container].join(' ')}>
            <div className={ style.contacts_block }>
                <h2>Contacts</h2>
                <p className={ style.phone }>+49 999 999 99 99</p>
                <div className={ style.social_icons }>
                    <a href="https://www.instagram.com/">
                        <img src={icon_1} alt="instagram" className={ style.insta_icon }/>
                    </a>
                    <a href="https://www.whatsapp.com/">
                        <img src={icon_2} alt="whatsapp" className={ style.whatsApp_icon }/>
                    </a>
                </div>
            </div>
            <div>
                <h2>Address</h2>
                <p className={ style.address }>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                <p className={ style.subtitle }>Working Hours:
                    <span className={ style.accent }>24 hours a day</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

// import React from 'react'
// import style from './index.module.css'
// import icon_1 from './media/Icon_1.png';
// import icon_2 from './media/Icon_2.png';


// export default function Footer() {

//   return (
//     <footer className={['wrapper', style.main_footer].join(' ')}>

//       <div className={style.footer}>

//         <div className={style.contacts_block}>
//                     <p>Contacts</p>
//                     <h2>+ 7 999 999 99 99</h2>
//                         <div className={style.messengers}>
//                           <a href='"https://www.instagram.com/"'>
//                           <img src={icon_1} alt="icon" />
//                           </a>
//                           <a href="https://www.whatsapp.com/">
//                           <img src={icon_2} alt="icon" />
//                         </a>
//                         </div>
//         </div>

//           <div className={style.address}>
//             <p className={style.adr}>Address</p>
//             <h2>Cosmonaut City</h2>
//             <h2>Cosmonauts Passage</h2>
//             <p className={style.mode}>Working mode</p>
//             <p className={style.hours}>24 hours a day</p>
//             </div>

//         </div>
          
//     </footer>
//   )
// }