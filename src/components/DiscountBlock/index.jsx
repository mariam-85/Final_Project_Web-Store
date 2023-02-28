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
    required: '*The field is required',
    pattern: {
        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        message: '*Not valid format'
    }
})

  return (
    <section className={style.discount_section} id='discount'>
        <img src={image} alt="img" />
        <div>
            <h2 className={style.discount_section_title}>5% off</h2>
                <h2 className={style.second_title}>on the first order</h2>            
            <form onSubmit={handleSubmit(submit)} className={style.discount_form}>
                <input type='number' name='phone number' placeholder='+49'  {...numberRegister}/>
                <div className={style.error_message}>
                    {errors.number && <p>{errors.number?.message}</p>}
                </div>
                <button>Get a discount</button>
            </form>
        </div>
    </section>
  )
}
