import React from 'react'
import ProfileCard from './ProfileCard'

const Content = ({ sayHello, user }) => {
    return (
        <div className=' border-1 rounded-md h-75 px-2 py-3'>
            <h1 className='text-xl font-bold p-2'>Content Area</h1>
            <ProfileCard user={user} sayHello={sayHello} />
        </div>
    )
}

export default Content