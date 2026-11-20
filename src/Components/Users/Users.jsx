import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';


const Users = () => {

    const users = useLoaderData();
    // console.log(users);

    return (
        <div className='text-center'>
            <h4 className='text-5xl text-blue-700'>This is Users Section</h4>
            <div className=''>
                {
                users.map(user => <User key={user.id} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;