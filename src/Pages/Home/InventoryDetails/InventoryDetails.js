import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryDetails = ({ details }) => {
    const { _id, img, name, description, price, quantity, supplier } = details;
    const navigate = useNavigate()
    const navigateToUpdateDetails = (id) => {
        navigate(`/inventoryDetails/${id}`)
    }
    let sold;
    if (parseInt(quantity) === 0) {
        sold = <p>Sold Out</p>
    }
    return (

        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className='shadow-sm p-2 mb-5 bg-bodyrounded'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img className='rounded' src={img} alt="" />

                    </div>
                    <div className='text-center mt-3 mb-2'>
                        <h4> {name} </h4>
                        <p className='font-weight-bold h6'><q>{description}</q></p>
                        <h5>Quantity:{parseInt(quantity) === 0 ? sold : quantity}</h5>
                        <h6>Supplier:{supplier}</h6>
                        <p>Price:${price}</p>

                        <button className='btn' style={{ backgroundColor: '#72adf1', borderRadius: '10px', border: 'none', color: 'white' }} onClick={() => navigateToUpdateDetails(_id)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;