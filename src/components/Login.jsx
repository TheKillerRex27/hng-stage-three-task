import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import LoadingOverlay from 'react-loading-overlay-ts'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [Loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (err) {
            setLoading(false)
            return setError('Failed to Login. Check your email and password.')
        }
    };

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }} >
                <LoadingOverlay
                    active={Loading}
                    spinner
                    text={'Logging In'}
                >
                    <Card>
                        <Card.Body>
                            
                                <h2 className='text-center mt-2'>Login</h2>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className='mt-4' id='email'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            value= {email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className='mt-4' id='password'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type='password'
                                            value= {password}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button className='w-100 my-4' type='submit'>Login</Button>
                                </Form>
                        </Card.Body>
                    </Card>
                </LoadingOverlay>
            </div>
        </Container>
    )
}

export default Login
