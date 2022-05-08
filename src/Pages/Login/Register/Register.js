import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        firebaseError,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const valid = emailRegex.test(e.target.value);
        console.log(e.target.value)

        if (valid) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" })
        }
        else if (e.target.value === '') {
            setErrors({ ...errors, email: "" })
        }

        else {
            setErrors({ ...errors, email: "Invalid email" })
        }
    }

    const handlePassword = (e) => {
        const passRegex = /.{8,}/;
        const validPass = passRegex.test(e.target.value);

        if (validPass) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else if (e.target.value === '') {
            setErrors({ ...errors, password: "" })
        }


        else {
            setErrors({ ...errors, password: "less than 8 characters" })
        }
    }

    const handleConfirmPass = (e) => {
        if (userInfo.password === e.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })

            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "Passwords Dont match" })
        }
    }


    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)

    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mt-5'>
            <div className='w-50 mx-auto'>
                <h1>Register</h1>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            required
                            onChange={handleEmail}
                        />
                        {
                            errors?.email && <p className='text-danger'>{errors.email}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            required
                            onChange={handlePassword} />
                        {
                            errors?.password && <p className='text-danger'>
                                {errors.password}
                            </p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            required
                            onChange={handleConfirmPass}
                        />
                    </Form.Group>
                    <button className='btn btn-dark mx-auto d-block' style={{ backgroundColor: '#72adf1', borderRadius: '10px', border: 'none', color: 'white' }}>Register</button> <br />
                    <div className='text-center mb-1'>
                        <span >Already have an account? <Link to='/login'>Login</Link></span> <br />
                    </div>
                </Form>
                {
                    firebaseError && <p className='text-danger text-center'>{firebaseError.message}</p>
                }

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;