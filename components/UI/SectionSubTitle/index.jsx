import React from 'react'
import styles from './subtitle.module.css'

function SectionSubtitle(props) {
  return (
    <h1 className={`${styles.section__subtitle}`}>{props.subtitle}</h1>
  )
}

export default SectionSubtitle