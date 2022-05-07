import React from 'react';
import './Sponsors.css'
import logo1 from '../../../images/Sponsors/logo1.PNG'
import logo2 from '../../../images/Sponsors/logo2.PNG'
import logo3 from '../../../images/Sponsors/logo3.PNG'
import logo4 from '../../../images/Sponsors/logo4.PNG'

const Sponsors = () => {
    return (
        <div className='container '>
            <h1 className='text-center display-5 title pb-2'>Our Sponsors</h1>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-sm">
                        <div class="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-center sponsor-container"><img src={logo1} alt="" /></div>

                    </div>
                    <div className="col-sm ">
                        <div class="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-center sponsor-container"><img src={logo2} alt="" /></div>

                    </div>
                    <div className="col-sm ">
                        <div class="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-center sponsor-container"><img src={logo3} alt="" /></div>

                    </div>
                    <div className="col-sm ">
                        <div class="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-center sponsor-container"><img src={logo4} alt="" /></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;