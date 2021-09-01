import React, { useCallback, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
    faCircleNotch,
    faCheck,
    faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import emailjs from 'emailjs-com'

const Contact = () => {

    const API_PATH = '/api/contact/index.php'

    const [messageSent, setMessageSent] = useState(false)
    const [messageSending, setMessageSending] = useState(false)
    const [sentErrors, setSentErrors] = useState(null)

    const schema = yup.object().shape({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        subject: yup.string().required('Required'),
        content: yup.string().required('Required'),
    })

    const { REACT_APP_USER_ID } = process.env

    const submitEmail = useCallback((e) => {
        setMessageSending(true)
        emailjs.send('service_ysjyjuo', 'template_7etij9p', e, REACT_APP_USER_ID)
        .then((result) => {
            setMessageSent(true)
            setMessageSending(false)
        }, (error) => {
            // console.log(error.text)
            setSentErrors('There was an issue sending your email. Please try again later or reach out through social media.')
            setMessageSent(true)
            setMessageSending(false)
        })
    })

    return(
        <Container as='section' fluid='lg' className='boxed-layout p-5' id='contact-section'>
            <Row className='justify-content-center justify-content-md-start'>
                <Col xs='auto'>
                    <h1 style={{color: '#033249', textDecoration: 'underline'}}>Contact Me</h1>
                </Col>
            </Row>
            <Row className='justify-content-center justify-content-md-start'>
                <Col xs='auto'>
                    <p>
                        Fill out the below form to send me an email or find me on <a href='https://www.linkedin.com/in/jasonrmace/' target='_blank' title='LinkedIn'><FontAwesomeIcon icon={faLinkedin} size='lg'/></a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md={10} lg={8}>
                    {!messageSent && (
                        <Formik validationSchema={schema} onSubmit={submitEmail} initialValues={{ firstName: '', lastName: '', email: '', subject: '', content: '',}}>
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formGroupFirstName'>
                                                <FloatingLabel controlId='formGroupFirstName' label='First Name'>
                                                    <Form.Control type='text' name='firstName' value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} placeholder='First Name' />
                                                    <Form.Control.Feedback type="invalid" tooltip>{errors.firstName}</Form.Control.Feedback>
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formGroupLastName'>
                                                <FloatingLabel controlId='formGroupLastName' label='Last Name'>
                                                    <Form.Control type='text' name='lastName' value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} placeholder='Last Name' />
                                                    <Form.Control.Feedback type="invalid" tooltip>{errors.lastName}</Form.Control.Feedback>
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formGroupEmail'>
                                                <FloatingLabel controlId='formGroupEmail' label='Email Address'>
                                                    <Form.Control type='email' name='email' value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} placeholder='name@example.com' />
                                                    <Form.Control.Feedback type="invalid" tooltip>{errors.email}</Form.Control.Feedback>
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formGroupSubject'>
                                                <FloatingLabel controlId='formGroupSubject' label='Email Subject'>
                                                    <Form.Control type='text' name='subject' value={values.subject} onChange={handleChange} isValid={touched.subject && !errors.subject} placeholder='Email Subject' />
                                                    <Form.Control.Feedback type="invalid" tooltip>{errors.subject}</Form.Control.Feedback>
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formGroupContent'>
                                                <FloatingLabel controlId='formGroupContent' label='Email Content'>
                                                    <Form.Control as='textarea' name='content' value={values.content} onChange={handleChange} isValid={touched.content && !errors.content} placeholder='Email Content' style={{height: '15em'}} />
                                                    <Form.Control.Feedback type="invalid" tooltip>{errors.content}</Form.Control.Feedback>
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button type='submit'>Send</Button> {messageSending === true ? <><FontAwesomeIcon style={{color: '#FF8038'}} icon={faCircleNotch} size='lg' pulse/> <span style={{color: '#FF8038'}}>Sending...</span></> : ''}
                                        </Col>
                                    </Row>
                                    
                                </Form>
                            )}
                        </Formik>
                    )}
                    {messageSent === true && sentErrors === null && (
                        <>
                            <Row className='justify-content-center'>
                                <Col sm='auto'>
                                    <h5><FontAwesomeIcon icon={faCheck} size='lg' style={{color: 'green'}} /> Your message has been sent!</h5>
                                </Col>
                            </Row>
                            <Row className='justify-content-center'>
                                <Col sm='auto'>
                                    <h6>Thanks for reaching out. I will respond as soon as possible.</h6>
                                </Col>
                            </Row>
                        </>
                    )}
                    {messageSent === true && sentErrors !== null && (
                        <>
                            <Row className='justify-content-center'>
                                <Col sm='auto'>
                                    <h5 style={{color: 'red'}}><FontAwesomeIcon icon={faExclamationTriangle} size='lg' style={{color: 'red'}} /> There was an issue sending your email.</h5>
                                </Col>
                            </Row>
                            <Row className='justify-content-center'>
                                <Col sm='auto'>
                                    <h6>Please try again later or reach out through social media.</h6>
                                </Col>
                            </Row>
                        </>
                    )}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Contact