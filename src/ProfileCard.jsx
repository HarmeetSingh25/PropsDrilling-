import React from 'react'
import UserInfo from './UserInfo'

const ProfileCard = ({user, sayHello}) => {
  return (
        <div className='border-1 p-2 rounded-md h-57'>
        <h1 className=' p-2 text-md font-bold'>Profile Card</h1>
        <UserInfo user={user} sayHello={sayHello} />
    </div>
  )
}

export default ProfileCard