import React from 'react'
import Content from './Content'

const Sidebar = ({ sayHello, user }) => {
    return (
        <div className='border-1  border-gray-400 px-4 rounded-md py-5 h-98'>
            <h1 className='text-2xl font-bold py-3'>Sidbar</h1>
            <Content sayHello={sayHello} user={user} />
        </div>
    )
}

export default Sidebar