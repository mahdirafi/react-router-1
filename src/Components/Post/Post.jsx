import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
            navigate(`/posts/${id}`)
    }
    return (
        <div className='border-3 border-blue-800 p-2 m-3 rounded-2xl'>
            <p>ID Number is: {id}</p>
            <h2>Tittle: {title}</h2>
            <h2>Tittle: {body}</h2>

           <Link to={`/posts/${id}`}>
                <button className='py-2 px-3 bg-red-300 rounded cursor-pointer'>Show Details</button>
            </Link>
            <button className='py-2 px-3 bg-green-300 ml-2 rounded cursor-pointer text-zinc-900' 
                    onClick={handleNavigate}>  Details of: {id}  </button>

        </div>
    );
};

export default Post;