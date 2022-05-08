import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        // to send to database 
        const url = `https://infinite-journey-06820.herokuapp.com/review`
        const item = {
            name: data.name,
            img: data.img,
            rating: data.rating,
            desc: data.desc,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast("Item Added")
            })



        // axios.post(`https://infinite-journey-06820.herokuapp.com/additems`, item)
        //     .then(res => {
        //         const { data } = res;
        //         if (data.insertedId) {
        //             console.log("item added")
        //         }
        //     })
    };
    return (
        <div className='w-50 mx-auto add-container pt-5'>
            <h3 className='text-center'>Add Reviews here</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Rating in Stars' type="text" {...register("rating")} />
                <input className='mb-2' placeholder='Description' type='textarea' style={{ paddingBottom: '20px' }} {...register("desc")} />
                <input type="submit" value='Add Review' className='custom-btn' />
            </form>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default AddReview;