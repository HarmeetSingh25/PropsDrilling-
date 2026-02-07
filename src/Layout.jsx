import React from 'react'
import Sidebar from './Sidebar'
const Layout = ({ sayHello, user }) => {
    return (
        <div>
            <Sidebar sayHello={sayHello} user={user} />
        </div>
    )
}

export default Layout