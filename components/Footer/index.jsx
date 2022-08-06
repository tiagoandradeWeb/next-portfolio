import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { Container, Row, Col} from 'reactstrap'
import navLinks from '../data/nav'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="6">
          <div className={`${styles.nav__menu}`}>
              {
                navLinks.map((item, index)=>(
                  <Link href={item.path} key={index}>{item.name}</Link>
                ))
              }
          </div>
          </Col>
          <Col lg="6">
            <div className={`${styles.footer__creator}`}>
              <h6>Created by Muhid</h6>
            </div>
          </Col>
          <Col lg="12">
            <div className={`${styles.footer__copyright}`}>
              <p>&copy; Copyright {year} - Developed by Muhibur Rahman. All right reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer