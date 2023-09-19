import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import { auth } from '../config/firebase'

const NavbarComponent = () => {

  const handleClick = () => {
    auth.signOut()
    navigate('/login')
}

  return (
    <div>
        <Navbar className='d-flex px-5 justify-content-between' bg="dark" expand="lg">
          <Navbar.Brand href="#" className='text-white'>Gallery</Navbar.Brand>
          <Form className='d-flex w-50'>
            <Form.Group className='w-75 mx-3'>
              <Form.Control
                type='search'
                placeholder='Search Tags'
              />
            </Form.Group>
            <Button type='submit' size='sm'>Search</Button>
          </Form>
            <Nav className="mr-auto">
              <Button onClick={handleClick} >Logout</Button>
            </Nav>
        </Navbar>
    </div>
  )
}

export default NavbarComponent;
