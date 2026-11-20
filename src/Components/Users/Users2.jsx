import React from 'react';
import { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log("Users2 Data load suspense" , users);

    return (
        <div className='text-center'>
            <h2 className='text-3xl text-yellow-600 font-bold'>This is Users2 Section </h2>
        </div>
    );
};

export default Users2;