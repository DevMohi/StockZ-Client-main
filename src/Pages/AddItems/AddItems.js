import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { ToastIcon } from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';
import './AddItems.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        // to send to database 
        const url = `http://localhost:5000/inventory`
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast("Item Added")
            })

    };
    return (
        <div className='w-50 mx-auto add-container pt-5'>
            <h3 className='text-center'>Add Services here</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description'{...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type='number' {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier'{...register("supplier")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input type="submit" value='Add Service' className='custom-btn' />
            </form>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default AddItems;