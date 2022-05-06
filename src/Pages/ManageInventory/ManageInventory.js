import React from 'react';
import { Link } from 'react-router-dom';


const ManageInventory = () => {

    return (
        <div className='container'>
            <h1>This is Manage Inventory</h1>
            <Link to='/add'><button className='btn btn-success'>Add Items</button></Link>
        </div>
    );
};

export default ManageInventory;