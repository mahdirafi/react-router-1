import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';
 

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div className='text-center '>
            <h2 className='text-xl'>This is the Post Section</h2>
            <p className='text-xl'>Posts:{posts.length}</p>
            <div className='text-md font-medium text-amber-900'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;