import React from 'react'
import style from './index.module.css'
import image from './media/image 3.png'
import { useForm } from 'react-hook-form'


export default function DiscountBlock() {

const {register, handleSubmit, formState: {errors}, reset } = useForm();

const submit = (data) => {
    console.log(data);
    reset();            
}

const numberRegister = register('number', {
    required: '*The field number is required',
    pattern: {
        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 
        message: '*Not valid number-format'
    }
})

  return (
    <section className={style.discount_section} id='discount'>
        <img src={image} alt="img" />
        <div>
            <h2 className={style.discount_title}>
                <span className={style.accent_discount}>Discount 5%</span>
                for the first order
            </h2>
            <form className={style.discount_form} onSubmit={handleSubmit(submit)}>
                <input type="tel" name='number' placeholder='+7'  {...numberRegister}/>
                <div className={style.errors_message}>
                    {errors.number && <p>{errors.number?.message}</p>}
                </div>
                <button>Get discount</button>
            </form>
        </div>
    </section>
  )
}

// import React from 'react'
// import style from './index.module.css'

// export default function DiscountBlock
// () {
//   return (
//     <section className={style.section}>  
//             <div className={style.discount}>
//             <p>Discount 5%</p> 
//             <p className={style.order}>on first order</p>
//             <form className={style.form}>
// 					<input type='text' name='phone' placeholder='+49' />
// 					<button>Get a discount</button>
// 				</form>
//         </div>
//     </section>
//   )
// }
