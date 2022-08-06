import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from '../SectionSubTitle'
import styles from './contact.module.css'
import Form from './Form'

function Contact() {
  return (
    <section id="contact" className={`${styles.contact}`}>
        <Container>
            <Row>
                <Col lg='6'>
                    <SectionSubtitle subtitle='Contact me'/>
                    <h3 className='mt-4 mb-4'>Contact with me</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos omnis voluptatibus sunt, excepturi illo beatae reiciendis quos, exercitationem et iure, ut dolore aperiam sit?</p>
                    <ul className={`${styles.contact__info__item}`}>
                        <li className={`${styles.info__item}`}>
                            <span><i className="ri-map-pin-line"></i></span>
                            <p>Sylhete - Bangladesh</p>
                        </li>
                        <li className={`${styles.info__item}`}>
                            <span><i className="ri-mail-line"></i></span>
                            <p>muhid5532@gmail.com</p>
                        </li>
                        <li className={`${styles.info__item}`}>
                            <span><i className="ri-phone-line"></i></span>
                            <p>+088123456789</p>
                        </li>
                    </ul>
                    <div className={`${styles.social__links}`}>
                        <Link href='#'><i className="ri-youtube-line"></i></Link>
                        <Link href='#'><i className="ri-github-line"></i></Link>
                        <Link href='#'><i className="ri-linkedin-line"></i></Link>
                        <Link href='#'><i className="ri-facebook-line"></i></Link>
                        <Link href='#'><i className="ri-instagram-line"></i></Link>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <Form/>
                </Col>            
            </Row>
        </Container>
    </section>
  )
}

export default Contact