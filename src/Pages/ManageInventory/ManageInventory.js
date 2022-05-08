import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useInventory from '../../hooks/useInventory';
import './ManageInventory.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ManageInventory = () => {
    const [inventory, setInventory] = useInventory()
    const [user] = useAuthState(auth);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure");
        if (proceed) {
            const url = `https://infinite-journey-06820.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventory.filter(item => item._id !== id)
                    setInventory(remaining)
                })
        }
    }


    return (
        <div className='container table-container'>
            <h3 className='text-center mt-3 pb-2'>Manage Your Services</h3>
            <table className='w-100'>
                <tr>
                    <th scope="col" className='me-2 w-25 border border-dark text-center'>Image</th>
                    <th scope="col " className='me-2 w-25 border border-dark text-center'>Name</th>
                    <th scope="col " className='me-2 w-25 border border-dark text-center'>Quantity</th>
                    <th scope="col" className='me-2 w-25 border border-dark text-center'>Price</th>

                </tr>
            </table>
            {
                inventory.map(details => <div
                    key={details._id}
                    className=''>
                    <div>
                        <table className="table table-light">
                            <tbody>
                                <tr>
                                    <td className='w-25 text-center'><img style={{ width: '50px' }} src={details.img} alt="" /></td>
                                    <td className='w-25 text-center'>{details.name}</td>
                                    <td className='w-25 text-center'>{parseInt(details.quantity) === 0 ? <p className='text-danger'>Sold Out</p> : details.quantity}</td>
                                    <td className='w-25 text-center'>{details.price}
                                        <button className=' btn btn-dark delete-btn ms-2' onClick={() => handleDelete(details._id)}>❌</button>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>)
            }

            <div className='d-flex justify-content-end'>
                <Link to='/add'><button className='btn btn-success' style={{ backgroundColor: '#72adf1', borderRadius: '10px', border: 'none', color: 'white' }}>Add Items</button></Link>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default ManageInventory;