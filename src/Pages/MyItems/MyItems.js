import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orderList`
        fetch(url, {
            headers: {
                'authorization': `${user?.email} ${localStorage.getItem("accessToken")}`,
            },
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [user?.email])

    return (
        <div>
            <h1>Hello</h1>
            <div>
                {
                    orderList.map(order => <h1 key={order._id}>{order.name}</h1>)
                }
            </div>
        </div>
    );
};

export default MyItems;