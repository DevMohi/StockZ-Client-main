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

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/' href="#">Stonks</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs' >
                            Blogs
                        </Nav.Link>
                        {user && <>
                            <Nav.Link as={Link} to='/add' >
                                Add Items
                            </Nav.Link>
                            <Nav.Link as={Link} to='/manage' >
                                Manage Items
                            </Nav.Link>
                        </>}
                    </Nav>
                    <Form className="d-flex">
                        {
                            user ? <Button onClick={handleLogout}>Logout</Button> : <Button as={Link} to='/login' variant="outline-success">Login</Button>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;