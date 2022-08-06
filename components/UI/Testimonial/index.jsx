import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import Image from 'next/image'
import SectionSubtitle from '../SectionSubTitle'
import network from '../../../public/images/connectedworld.png'
import Slider from 'react-slick'
import styles from './testimonial.module.css'

import img01 from '../../../public/images/hero.jpg'
import img02 from '../../../public/images/img-01.jpg'
import img03 from '../../../public/images/img-02.jpg'

function Testimonial() {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1

    }
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <Image alt='network' src={network} width='400' height='400'/>:
                </Col>
                <Col lg='6' md='6' className={`${styles.testimonial__content}`}>
                    <SectionSubtitle subtitle="Testimonials"/>
                    <h4 className="mt-4 mb-5">What my client says</h4>
                    <Slider {...settings}>
                        <div className={`${styles.testimonial__item}`}>
                            <div className={`${styles.testimonial__client}`}>
                                <Image className='rounded-2' src={img01} alt="Client-img" width={50} height={50}/>
                                <div>
                                    <h6>Jhon Doe</h6>
                                    <h6>Software Enginner</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae natus possimus vel! Sequi nemo rerum perferendis delectus error minus eveniet eos deserunt vero quis laudantium, maxime officiis tenetur veniam cupiditate cum laborum repudiandae eius autem ab saepe quasi sit.</p>
                        </div>

                        <div className={`${styles.testimonial__item}`}>
                            <div className={`${styles.testimonial__client}`}>
                                <Image className='rounded-2' src={img02} alt="Client-img" width={50} height={50}/>
                                <div>
                                    <h6>Henry Nichols</h6>
                                    <h6>Web Developer</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae natus possimus vel! Sequi nemo rerum perferendis delectus error minus eveniet eos deserunt vero quis laudantium, maxime officiis tenetur veniam cupiditate cum laborum repudiandae eius autem ab saepe quasi sit.</p>
                        </div>

                        <div className={`${styles.testimonial__item}`}>
                            <div className={`${styles.testimonial__client}`}>
                                <Image className='rounded-2' src={img03} alt="Client-img" width={50} height={50}/>
                                <div>
                                    <h6>Adam Smith</h6>
                                    <h6>Financial Accountant</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae natus possimus vel! Sequi nemo rerum perferendis delectus error minus eveniet eos deserunt vero quis laudantium, maxime officiis tenetur veniam cupiditate cum laborum repudiandae eius autem ab saepe quasi sit.</p>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}

export default Testimonial