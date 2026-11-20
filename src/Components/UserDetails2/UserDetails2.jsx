import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise) ;
    // console.log(name, username);
    return (
        <div>
            <p className='text-xl font-medium text-zinc-900'><small>User Name : {username}</small></p>
            <p className='text-xl font-medium text-zinc-900'>Name: {name}</p>
        </div>
    );
};

export default UserDetails2;