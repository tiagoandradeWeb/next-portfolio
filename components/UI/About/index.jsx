import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubTitle'
import styles from './about.module.css'
import Image from 'next/image'

import img01 from '../../../public/images/img-01.jpg'
import img02 from '../../../public/images/img-02.jpg'
import img03 from '../../../public/images/img-03.jpg'
import img04 from '../../../public/images/hero.jpg'

function About() {
  return (
    <section id="about">
        <Container>
            <Row>
                <Col lg='6' className={`${styles.about__content}`}>
                    <SectionSubtitle subtitle='About me'/>
                    <h3 className='mt-4'>I&apos;m here</h3>
                    <h3 className='mb-4'>to help your next project</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus molestiae quo. At suscipit placeat architecto rem explicabo ratione sint autem accusantium aut facere cupiditate, ea voluptatibus natus, quas rerum quisquam qui pariatur dolorem officiis? Deserunt doloremque quidem odio suscipit.</p>
                    <div className='d-flex align-items-center gap-5'>
                        <div className='mt-3'>
                            <h6 className='d-flex align-items-center gap-3 fw-normal'><span className={`${styles.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>Problem Solving</h6>
                            <h6 className='d-flex align-items-center gap-3 fw-normal'><span className={`${styles.about__icon}`}><i className="ri-checkbox-circle-line "></i></span>Search A Lot</h6>
                        </div>

                        <div className='mt-3'>
                            <h6 className='d-flex align-items-center gap-3 fw-normal'><span className={`${styles.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>Creative Idea</h6>
                            <h6 className='d-flex align-items-center gap-3 fw-normal'><span className={`${styles.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>High Quality</h6>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="primary__btn"><Link href='#portfolio'>My portfolio</Link></button>
                        <button className="secondary__btn"><Link href='#'>Download CV</Link></button>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className={`${styles.about__img__gallery} d-flex gap-4 justify-content-end`}>
                       <div className='d-flex flex-column mb-3'>
                            <div className={`${styles.about__img} ${styles.about__img__box}`}>
                                <Image src={img01} alt=""/>
                            </div>

                            <div className={`${styles.about__img} ${styles.about__img__box}`}>
                                <Image src={img02} alt=""/>
                            </div>
                       </div> 

                       <div className='d-flex flex-column mb-3'>
                            <div className={`${styles.about__img} ${styles.about__img__box}`}>
                                <Image src={img03} alt=""/>
                            </div>

                            <div className={`${styles.about__img} ${styles.about__img__box}`}>
                                <Image src={img04} alt=""/>
                            </div>
                       </div> 
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About