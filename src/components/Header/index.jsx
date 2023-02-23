import React from 'react'
import Nav from '../Nav'
import logo from './media/logo_pic.png'
import style from './index.module.css'
import { Link } from 'react-router-dom'

    export default function Header() {
        return (
        <section>
            <div className={['wrapper', style.header].join(' ')}>
                <div className={style.container_logo_btn}>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to='products'>
                        <button>Catalog</button>
                    </Link>
                </div>
                <Nav />
            </div>
        </section>
    
    )
}


// import React from 'react'
// import logo from './media/logo_pic.png'
// import { Link } from 'react-router-dom'
// import style from './index.module.css'
// import Nav from '../Nav'
// import Button from '../Button'


// export default function Header() {
//   return (
//     <header className={['wrapper', style.main_header].join(' ')}>
//             <div className={style.header}>
//             <div className={style.logo_btn}>
//             <a href="/">
//             <img src={logo} alt="logo"/>
//             </a>
//             {/* <Link to="categories/:category"> */}
//                 <Button>Catalogue</Button> 
//             </div>
//             {/* </Link> */}
//             <Nav className={style.nav_block}/>
//             </div>
//     </header>
//   )
// }

