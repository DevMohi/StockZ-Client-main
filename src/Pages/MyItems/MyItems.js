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
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [user?.email])

    return (
        <div>
            <h1>Hello</h1>
            <ul>
                {orderList.map(order => <li>{order.name}</li>)}
            </ul>
        </div>
    );
};

export default MyItems;