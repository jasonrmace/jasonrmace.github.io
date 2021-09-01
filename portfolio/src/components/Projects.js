import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import projectsJSON from '../projects.json'

const Projects = () => {
    return(
        <Container as='section' fluid='lg' className='boxed-layout p-5' id='projects-section'>
            <Row className='justify-content-center justify-content-md-start'>
                <Col xs='auto'>
                    <h1 style={{color: '#033249', textDecoration: 'underline'}}>Projects</h1>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {projectsJSON.projects.map((project) => {
                    return(
                        <Col>
                            <Card>
                                <CardImg variant='top' src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <Button variant='primary' href={project.link} target='_blank'>{project.linkText}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Projects