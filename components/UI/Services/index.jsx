import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from '../SectionSubTitle'
import ServicesItem from '../ServicesItem'
import styles from './services.module.css'

function Services() {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${styles.services__container}`}>
              <div>
                <ServicesItem title='App Development' icon='ri-apps-line'/>
                <ServicesItem title='Web Development' icon='ri-computer-line'/>
              </div>
                <ServicesItem title='Full-Stack Development' icon='ri-code-s-slash-line'/>
            </div>
          </Col>
          <Col lg="6" md="6" className={`${styles.service__title}`}>
            <SectionSubtitle subtitle='What I do'/>
            <h3 className='mb-0 mt-4'>Better Design,</h3>
            <h3 className='mb-4'>Better Experience</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis laudantium at, maxime dolore, ullam laboriosam, tenetur aliquam eos quae nostrum totam! Magni autem iusto expedita veniam fugit neque voluptas quis dicta adipisci at, omnis alias quos totam delectus ex nihil.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services