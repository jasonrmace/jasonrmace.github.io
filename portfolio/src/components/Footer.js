import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCopyright
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <footer style={{backgroundColor: '#033249', color: '#EFEDE8'}}>
            <Container fluid='lg' as='section' className='py-3'>
                <Row>
                    <Col>
                        This page was created using <a href='https://reactjs.org/' target='_blank'>React</a> &amp; <a href='https://getbootstrap.com/' target='_blank'>Bootstrap 5</a>.
                    </Col>
                    <Col md='auto' className='align-self-end'>
                        <FontAwesomeIcon icon={faCopyright} /> Copyright 2021 - Jason Mace
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer