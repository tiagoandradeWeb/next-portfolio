import React from 'react'
import styles from './form.module.css'

function Form() {
  return (
    <form className={`${styles.form}`}>
        <div className={`${styles.form__group}`}>
            <input type="text" placeholder='Your Name' required/>
        </div>
        <div className={`${styles.form__group}`}>
            <input type="email" placeholder='Email Andress' required/>
        </div>
        <div className={`${styles.form__group}`}>
            <textarea type="text" rows={5} placeholder='Message' required/>
        </div>
        <button className="primary__btn"  type='submit'>Send</button>
    </form>
  )
}

export default Form