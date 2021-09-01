import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mockup1 from '../dop3.png'

const Hero = () => {
    return(
        <Container as='section' fluid='lg' className='boxed-layout p-5'>
            <Row className='align-items-center p-4 pb-0 pe-md-0 pt-md-5 rounded-3 border shadow-sm' style={{backgroundColor: '#033a55', color: '#EFEDE8'}}>
                <Col md={7} className='p-3 p-md-4 pt-md-3'>
                    <h1 className='jm-port-display-4 lh-1' style={{color: '#FF8038'}}>Jason Mace</h1>
                    <h4 className='lh-1'>Front-End Web Developer/Designer</h4>
                    <hr />
                    <p className='lead'>
                        Hi, I am Jason Mace.  Below you will find several examples of my work, as well as, more information about me. Please feel free to reach out with any questions you might have. I look forward to speaking with you soon.
                    </p>
                </Col>
                <Col md={{span: 4, offset: 1}} className='overflow-hidden shadow-lg p-0'>
                    <img className='rounded-md-3' src={mockup1} alt='Astros Mockup' width='720' />
                </Col>
            </Row>
        </Container>
    )
}

export default Hero