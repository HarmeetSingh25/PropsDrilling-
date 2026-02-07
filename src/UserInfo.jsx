import React, { use } from 'react'

const UserInfo = ({ user, sayHello }) => {
  let handlefunction = ()=>{
sayHello(user.name)
    
  }
  return (
    <div className='border-1 p-2 rounded-md h-42'>
<h1 className='text-md font-bold px-2 py-1'>UserInfo</h1>
<div className='pl-8 flex gap-1.5 flex-col items-start'>

      <h1 className='text-sm'>
        Name:{user.name}
   
      </h1>
      <h1 className='text-sm'>
     Email:{user.email}
   
      </h1>
      <h1 className='text-sm'>
     Rols:{user.role}
   
      </h1>
      <button className='bg-gray-200 text-sm border-none rounded-md p-2' onClick={handlefunction}>Click me</button>
</div>
    </div>
  )
}

export default UserInfo