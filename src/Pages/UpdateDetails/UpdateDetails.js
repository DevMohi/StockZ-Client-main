import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateDetails = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})


    return (
        <div>
            This is Update details : {inventoryId}
        </div>
    );
};

export default UpdateDetails;