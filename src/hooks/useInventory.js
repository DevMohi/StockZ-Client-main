import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch('https://infinite-journey-06820.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    return [inventory, setInventory]
};

export default useInventory;