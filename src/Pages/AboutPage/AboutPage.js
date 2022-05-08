import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/about/bike1.png'
import banner2 from '../../images/about/bike3.png'
import banner3 from '../../images/about/bike4.png'

import './AboutPage.css'
const AboutPage = () => {
    return (
        <div>
            <h1 className='text-center display-6 mt-3'>About Page</h1>
            <div class="container shadow-sm p-3 mb-5 bg-white rounded desc-container d-flex align-items-center justify-content-center mt-5 ">
                <div class="w-100">
                    <div className='w-75 mx-auto'>
                        <div className='description ms-3'>
                            <h1 className='desc-title'>Description</h1>
                            <h6 className=''>
                                This website is created to manage the warehouse of a bikestock, this helps us update, manage, delete items we need. Not only for normal people, this is open to everyone and   they can update or add stocks according to their own wish
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='desc-img w-100'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 mx-auto"
                                src={banner1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 mx-auto"
                                src={banner2}
                                alt="Second slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 mx-auto"
                                src={banner3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

        </div>
    );
};

export default AboutPage;