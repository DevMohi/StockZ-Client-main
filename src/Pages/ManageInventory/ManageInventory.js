import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';



const ManageInventory = () => {
    const [inventory, setInventory] = useInventory()

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
    return (
        <div className='container'>
            <h1>Manage Your Services</h1>
            {
                inventory.map(details => <div
                    key={details._id}
                    className='w-75 mx-auto'>
                    <table className="table table-light">
                    
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Name</th>

                                <th scope="col">Supplier</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </tr>
                     


                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td><img style={{ width: '30px' }} src={details.img} alt="" /></td>
                                <td>{details.name}</td>
                                <td>{details.supplier}</td>
                                <td>{details.quantity}</td>
                                <td>{details.price}</td>
                                <td><button onClick={() => handleDelete(details._id)}>Delete</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>)
            }

            <Link to='/add'><button className='btn btn-success'>Add Items</button></Link>
        </div >
    );
};

export default ManageInventory;