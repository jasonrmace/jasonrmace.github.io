import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import bioPic from '../Jason-June-2018.jpg'

const Bio = () => {
    return(
        <Container as='section' fluid='lg' className='boxed-layout p-5' id='bio-section'>
            <Row className='justify-content-center justify-content-md-start'>
                <Col xs='auto'>
                    <h1 style={{color: '#033249', textDecoration: 'underline'}}>Bio</h1>
                </Col>
            </Row>
            <Row className='mx-2'>
                {/* <Col></Col> */}
                <Col className='pb-4 pb-md-0'>
                    <Image src={bioPic} roundedCircle style={{width: '100%'}} className='shadow-lg border border-2 border-dark' />
                </Col>
                <Col md={8} lg={8}>
                    <p>I am a passionate freelance web developer seeking to use proven front-end development and mobile-first skills to deliver coding excellence. I have built technical experience through founding and creating Discover Our Parks, LLC and while in college working on websites for Rap Pages Magazine and several independent films. I have continued to develop my creative skills working in theatre, building on my previous experience in the entertainment industry. I have fantastic management experience working in a team oriented environment as a logistics/operations manager with Target. Currently, I have continued my technical knowledge by quickly learning new coding languages to deliver on my own project goals. With Discover Our Parks, I also utilize multiple API’s with ever-changing guidelines and understand the need to monitor and maintain the connections, as well as adapt when needed. I also moved the entire back-end of the website to AWS on a Linux instance and I am utilizing SQL as the database platform.</p>
                </Col>
                {/* <Col></Col> */}
            </Row>
        </Container>
    )
}

export default Bio