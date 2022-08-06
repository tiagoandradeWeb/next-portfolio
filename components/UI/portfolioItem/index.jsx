import React from 'react'
import styles from './portfolioitem.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioItem = (props) => {
    const { title, img, liveUrl, keyword } = props.item
  return (
    <div className={`${styles.portfolio__item}`}>
        <div className='bg-transparent'>
            <h6>{title}</h6>
            {
                keyword.map((item, index) => (
                    <span className={`${styles.portfolio__keyword}`} key={index}>{item}</span>
                ))
            }
        </div>
        <div className={`${styles.portfolio__img}`}>
            <Image alt='portfolio-img' src={img} width='380' height='250'/>
        </div>
        <div className={`${styles.portfolio__live}`}>
            <button className="primary__btn">
                <Link href={liveUrl}>Launch</Link>
            </button>
        </div>
    </div>
  )
}

export default PortfolioItem