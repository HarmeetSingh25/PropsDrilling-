import React from 'react'
import Sidebar from './Sidebar'
const Layout = ({ sayHello, user }) => {
    return (
        <div className='border-1 rounded-md border-gray-400 h-120 p-3'>
            <h1 className='text-3xl font-bold py-3'>Dashboard Layout</h1>

            <Sidebar sayHello={sayHello} user={user} />
        </div>
    )
}

export default Layout