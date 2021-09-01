import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return(
        <Navbar collapseOnSelect  fixed='top' bg='dark' variant='dark' expand='lg'>
            <Container fluid='lg'>
                <Navbar.Brand href='/' style={{color: '#FF8038'}}>Jason Mace's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto' activeKey='/'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='#bio-section'>Bio</Nav.Link>
                        <Nav.Link href='#projects-section'>Projects</Nav.Link>
                        <Nav.Link href='#contact-section'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header