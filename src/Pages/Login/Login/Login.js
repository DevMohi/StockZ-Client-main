import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [authUser, authLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const valid = emailRegex.test(e.target.value);
    console.log(e.target.value);

    if (valid) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else if (e.target.value === "") {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
    }
  };

  const handlePassword = (e) => {
    const passRegex = /.{8,}/;
    const validPass = passRegex.test(e.target.value);

    if (validPass) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else if (e.target.value === "") {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "less than 8 characters" });
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  if (user) {
    const url = `https://stockz-server.onrender.com/login`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: authUser.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const resetPassword = async () => {
    const email = userInfo.email;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast("Please enter valid email address");
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mt-5">
      <div className="w-50 mx-auto">
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={handleEmail}
            />
            {errors?.email && <p className="text-danger">{errors.email}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={handlePassword}
            />
            {errors?.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </Form.Group>
          <button
            className="btn  mx-auto  d-block"
            style={{
              backgroundColor: "#72adf1",
              borderRadius: "10px",
              border: "none",
              color: "white",
            }}
          >
            Login
          </button>{" "}
          <br />
          <div className="text-center mb-1">
            <span>
              New to Stonks? <Link to="/register">Register</Link>
            </span>{" "}
            <br />
            <p>
              Forgot Password?
              <span
                className="text-success"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={resetPassword}
              >
                Reset
              </span>
            </p>
          </div>
        </Form>
        {firebaseError && (
          <p className="text-danger text-center">{firebaseError.message}</p>
        )}

        <SocialLogin></SocialLogin>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Login;
