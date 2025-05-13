import React, { useState } from 'react'

const Header = (props) => {
  // const [userName, setuserName] = useState('')
  // if(!data){
  //   setuserName('admin')
  // }else{
  //   setuserName(data.firstName)
  // }
  const logOutUser = ()=>{
  
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
    
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium '>Hello, 🖐️ <br /><span className='text-3xl font-semibold'> </span> </h1>
        <button onClick={logOutUser} className='border-2 border-none px-5 py-2 rounded-full bg-red-600 text-lg font-medium'> Log Out</button>
    </div>
  )
}

export default Header