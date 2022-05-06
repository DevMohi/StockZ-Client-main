import React, { useEffect, useState } from 'react';
import useInventory from '../../../hooks/useInventory';
import InventoryDetails from '../InventoryDetails/InventoryDetails';



const Inventory = () => {
    const [inventory, setInventory] = useInventory()
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