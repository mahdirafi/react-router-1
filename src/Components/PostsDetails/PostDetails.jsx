import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const navigate = useNavigate();
    return (
        <div className='text-center border-3 text-xl '>
            <h2>ID Number: {id}</h2>
            <h2>Title: {title}</h2>
            <h2>Body: {body}</h2>
            <button className='py-2 px-3 bg-green-300 ml-2 rounded cursor-pointer text-zinc-900'
            onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;