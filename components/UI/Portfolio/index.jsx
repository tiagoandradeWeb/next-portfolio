import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from 'reactstrap'
import SectionSubtitle from '../SectionSubTitle'
import styles from './portfolio.module.css'
import PortfolioItem from '../portfolioItem'

import portfolioData from '../../data/portfolio'

function Portfolio() {
    // Filtrando Categorias
    const [filter, setFilter] = useState('Mobile App')
    const [data, setData] = useState()

    useEffect(()=>{
        if(filter === 'Mobile App'){
            const filteredData = portfolioData.filter(item => item.category === filter)
            setData(filteredData)
        }

        if(filter === 'Web Design'){
            const filteredData = portfolioData.filter(item => item.category === filter)
            setData(filteredData)
        }
    },[filter])

    const active = `${styles.tb__btn__active}`
  return (
    <section id="portfolio">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle="My portfolio"/>
                    <h4 className='mt-4'>Some of my distinguished works</h4>
                </Col>
                <Col lg='6' md='6'>
                    <div className={`${styles.portfolio__menu} text-end`}>
                        <button className={`${filter === 'Mobile App' ? active : "text-white"} secondary__btn`} onClick={()=> setFilter('Mobile App')}>Mobile App</button>
                        <button className={`${filter === 'Web Design' ? active : "text-white"} secondary__btn`} onClick={()=> setFilter('Web Design')}>Web Design</button>
                    </div>
                </Col>
                {
                    data?.map((item) => (
                        <Col lg='4' md='4' key={item.id}>
                            <PortfolioItem item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio