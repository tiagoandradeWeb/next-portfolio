import React from 'react'
import styles from './servicesItem.module.css'

function ServicesItem({ title, icon}) {
  return (
    <div className={`${styles.services__item}`}>
        <span>
            <i className={icon}></i>
        </span>
        <h5>{title}</h5>
    </div>
  )
}

export default ServicesItem