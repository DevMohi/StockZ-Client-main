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
            const url = `http://localhost:5000/inventory/${id}`
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
    const handleOrder = (product) => {
        const { name, price } = product
        // console.log(product, user.email)
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: JSON.stringify({
                name, price,
                email: user?.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toast(data.success)
            });
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-center'>Manage Your Services</h3>
            {
                inventory.map(details => <div
                    key={details._id}
                    className='table-container'>
                    <div>
                        <table className="table table-light">

                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col" className='me-2'>Name</th>
                                <th scope="col" className='me-2'>Supplier</th>
                                <th scope="col" className='me-2'>Quantity</th>
                                <th scope="col" className='me-2'>Price</th>
                                <th scope="col"></th>
                            </tr>

                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td><img style={{ width: '50px' }} src={details.img} alt="" /></td>
                                    <td>{details.name}</td>
                                    <td>{details.supplier}</td>
                                    <td>{details.quantity}</td>
                                    <td>{details.price}</td>
                                    <td>
                                        <button className='btn btn-success me-2' onClick={() => handleOrder(details)}>Order</button>
                                        <button className=' btn btn-dark delete-btn' onClick={() => handleDelete(details._id)}>Delete❌</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>)
            }

            <div className='d-flex justify-content-center'>
                <Link to='/add'><button className='btn btn-success'>Add Items</button></Link>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default ManageInventory;