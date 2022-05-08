import React, { useEffect, useState } from 'react';
import useInventory from '../../../hooks/useInventory';
import InventoryDetails from '../InventoryDetails/InventoryDetails';
import Loading from '../../Loading/Loading'


let loadingElement = <Loading></Loading>

const Inventory = () => {

    const [inventory, setInventory] = useInventory()
    return (
        <div className='container my-5'>
            <h1 className='text-center display-6'>Inventory</h1>
            <div className="row">
                {
                    inventory.length === 0 ? loadingElement : inventory.slice(0, 6).map(details => <InventoryDetails
                        key={details._id}
                        details={details}
                    ></InventoryDetails>)
                }
            </div>
        </div>
    );
};

export default Inventory;