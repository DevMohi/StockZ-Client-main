import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container mt-5'>
            <div className='w-50 mx-auto'>
                <h1>Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <button className='btn btn-dark mx-auto w-50 d-block'>Login</button> <br />
                    <div className='text-center mb-1'>
                        <span >New to Stonks? <Link to='/register'>Register</Link></span> <br />
                        <span>Forgot Password? <a href="">Reset</a></span>
                    </div>
                </Form>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;