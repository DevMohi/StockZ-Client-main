import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (

        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/' href="#" className='text-white'>Stonks</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home' className='text-white'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs' className='text-white'>
                            Blogs
                        </Nav.Link>
                        {user && <>
                            <Nav.Link as={Link} to='/add' className='text-white'>
                                Add Items
                            </Nav.Link>
                            <Nav.Link as={Link} to='/manage' className='text-white'>
                                Manage Items
                            </Nav.Link>
                            <Nav.Link as={Link} to='/myitems' className='text-white'>
                                My Items
                            </Nav.Link>
                        </>}
                    </Nav>
                    <Form className="d-flex">
                        {
                            user ? <Button onClick={handleLogout} className='text-white'>Logout</Button> : <Button as={Link} to='/login' variant="outline-success" className='text-white'>Login</Button>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;