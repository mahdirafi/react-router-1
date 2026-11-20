import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const {name, email,phone,id} = user;
    const [showInfo, setShowInfo] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    return (
        <div className=''>
            <div className='border-4 border-green-500 rounded-2xl p-3 m3 w-4/12 mx-auto mt-2'>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p><small>Phone: {phone}</small></p>
                <Link to={`/users/${id}`}>Show Details</Link>

                <button className='py-2 px-3 bg-green-300 ml-2 rounded cursor-pointer text-zinc-900 '
                  onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? 'Hide': 'Detail'} Info</button>

                    {
                        showInfo && <Suspense fallback={<span>Loading...</span>}>
                            <UserDetails2 userPromise={userPromise}></UserDetails2>
                        </Suspense>
                    }
               

            </div>
        </div>
    );
};

export default User;