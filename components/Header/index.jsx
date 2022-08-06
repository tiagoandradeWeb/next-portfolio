import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import styles from './header.module.css'
import Link from 'next/link'
import navLinks from '../data/nav'

const Header = () => {
  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const headerFunc = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add(`${styles.header__shrink}`)
    }else{
      headerRef.current.classList.remove(`${styles.header__shrink}`)
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  },[])

  const toggleMenu = () => menuRef.current.classList.toggle(`${styles.menu__active}`)
  
  return (
    <header className={`${styles.header}`} ref={headerRef}>
      <Container>
        <div className={`${styles.nav__wrapper}`}>
          <div className={`${styles.logo}`}>
            <h1><span>M</span>uhid</h1>
          </div>
          <div className={`${styles.navigation}`} ref={menuRef} onClick={toggleMenu}>
            <div className={`${styles.nav__menu}`}>
              {
                navLinks.map((item, index)=>(
                  <Link href={item.path} key={index}>{item.name}</Link>
                ))
              }
              <div className={`${styles.nav__right}`}>
                <p className='d-flex align-items-center gap-2 mb-0'>
                  <i className="ri-phone-line"></i> +088123456789
                </p>
              </div>
            </div>
          </div>
          <span className={`${styles.mobile__menu}`} onClick={toggleMenu}><i className="ri-bar-chart-horizontal-line"></i></span>
        </div>
      </Container>
    </header>
  )
}

export default Header