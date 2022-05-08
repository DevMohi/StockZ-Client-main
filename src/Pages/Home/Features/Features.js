import React from 'react';
import { Form } from 'react-bootstrap';
import pic1 from '../../../images/Features/pic1.png'
import pic2 from '../../../images/Features/pic2.png'
import pic3 from '../../../images/Features/pic3.png'

const Features = () => {
    return (
        <div style={{ marginBottom: '200px' }}>
            <div class="container">
                <h1 className='display-6 text-center pb-3'>We Offer!</h1>
                <div class="row mt-3">
                    <div class="col-sm">
                        <div className='d-flex align-items-center shadow-sm p-3 mb-5 bg-white rounded justify-content-center'>
                            <img src={pic1} alt="" />
                            <div className='ms-2'>
                                <p className='h6'>Free Shipping Orders</p>
                                <small>A delivery service you can rely on</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className='d-flex align-items-center shadow-sm p-3 mb-5 bg-white rounded justify-content-center'>
                            <img src={pic2} alt="" />
                            <div className='ms-2'>
                                <p className='h6'>24/7 Customer Support</p>
                                <small >Satisfied Customers are our best ads</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className='d-flex align-items-center shadow-sm p-3 mb-5 bg-white rounded justify-content-center'>
                            <img src={pic3} alt="" />
                            <div className='ms-2'>
                                <p className='h6'>100% Secure Payments</p>
                                <small >A secured service you can trust on</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='w-50 mx-auto'>

                    <Form.Control
                        type="email"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Subscribe to news letter'
                    />
                    <button className='d-block mt-2 mx-auto btn' style={{ backgroundColor: '#72adf1', borderRadius: '10px', border: 'none', color: 'white' }}>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Features;