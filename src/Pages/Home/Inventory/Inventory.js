import React, { useEffect, useState } from 'react';
import InventoryDetails from '../InventoryDetails/InventoryDetails';



const Inventory = () => {
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Inventory</h1>
            <div className="row">
                {
                    inventory.slice(0, 6).map(details => <InventoryDetails
                        key={details._id}
                        details={details}
                    ></InventoryDetails>)
                }
            </div>
        </div>
    );
};

export default Inventory;