import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);

    const {userId} = useParams();
    console.log(userId);
    // const params = useParams();
    // console.log(params);

    const {website,name} = user;
    return (
        <div className='text-center'>
            <h3 className='font-bold text-4xl'>Name: {name}</h3>
            <h2 className='font-bold text-2xl'>Website: {website}</h2>
            
        </div>
    );
};

export default UserDetails;