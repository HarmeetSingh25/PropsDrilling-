import React from 'react'
import Layout from './Layout';

const App = () => {
  let user = {
    name: "Harmeet",
    email: "xyz@gmail.com",
    role: "Developer"
  }
  let sayHello =(name)=>{
    console.log(`Hello ${name}`);
    
  }
  return (
    <div>
<Layout sayHello= {sayHello} user= {user} />
    </div>
  )
}

export default App