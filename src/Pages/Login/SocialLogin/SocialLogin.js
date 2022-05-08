import React from 'react';
import google from '../../../images/icons/google.png'
// import github from '../../../images/icons/github.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css'
import Loading from '../../Loading/Loading';


const SocialLogin = () => {
    const [authUser, authLoading] = useAuthState(auth)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        signInWithGoogle()
    }
    if (user) {
        const url = `http://localhost:5000/login`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: authUser.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
            });
    }
    
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='social-button-container'>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: "1px" }} className='bg-dark w-25'></div>
                    <div className='px-1 pb-1'>or</div>
                    <div style={{ height: "1px" }} className='bg-dark w-25'></div>
                </div>

                <div className='py-1'>
                    <button className='p-1 btn btn-outline-dark mx-auto d-block '>
                        <img src={google} alt="" />
                        <span className='px-2' onClick={handleGoogle}>Sign in with Google</span>
                    </button>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                {error && <small className='text-center text-danger'>{error.message}</small>}
            </div>
        </div>
    );
};

export default SocialLogin;