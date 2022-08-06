import React from 'react'
import SectionSubtitle from '../SectionSubTitle'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../../../public/images/hero.jpg'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
        <Container>
            <Row>
                <Col lg="6" md='6'>
                    <div className={`${styles.hero__content}`}>
                        <SectionSubtitle subtitle="Helo"/>
                        <h2 className="mt-3 mb-3">I&apos;m Muhibur Rahman</h2>
                        <h5 className="mb-4">Frontend Developer</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veritatis accusantium aliquam vitae blanditiis praesentium ratione totam magni voluptatem incidunt.</p>
                        <div className="mt-5">
                            <button className="primary__btn"><Link href={'#'}>Hire me</Link></button>
                            <button className="secondary__btn"><Link href={'#'}>Download CV</Link></button>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md='6'>
                <div className={`${styles.hero__img} text-end`}>
                    <Image alt='Hero-image' src={HeroImage} width="400" height="400"/>
                    <div className={`${styles.hero__skills}`}>
                        <h6>Skills</h6>
                        <span><i className="ri-bar-chart-line"></i></span>
                        <span><i className="ri-bar-chart-line"></i></span>
                        <span><i className="ri-bar-chart-line"></i></span>
                        <span><i className="ri-bar-chart-line"></i></span>
                        <span><i className="ri-bar-chart-line"></i></span>
                        <span><i className="ri-bar-chart-line"></i></span>
                    </div>
                    <div className={`${styles.hero__experience} d-flex align-items-center gap-3`}>
                        <span><i className="ri-lightbulb-flash-line"></i></span>
                        <div className="bg-transparent">
                            <h6>Experience</h6>
                            <h5 className='mb-0'>4 Years</h5>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero