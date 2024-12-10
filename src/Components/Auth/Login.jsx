import React, { useState } from 'react'

function Login({handleLogin}) {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const emailHandler=(event)=>{
    
        setEmail(event.target.value);
        
    }
    const passwordHandler=(event)=>{
      
        setPassword(event.target.value)
        
        
    }
    let submitHandler= (event)=>{
        event.preventDefault();
  
    //    console.log("your email is",Email ,"and password is ",Password);
       handleLogin(Email,Password)
        setEmail("")
        setPassword("") 
    }

  return (
  <div className='flex items-center justify-center h-screen w-screen'>
    <div className='border-2 border-emerald-600 p-24 rounded-xl'>
        <form onSubmit={submitHandler}  className='flex flex-col items-center justify-center'>
            <input onChange={emailHandler }  value={Email} required className='border-2 border-emerald-600 rounded-full px-4 py-3 text-xl text-white outline-none bg-transparent'  type="email" placeholder='Enter Your Email' />
            <input onChange={passwordHandler} value={Password} required className='border-2 border-emerald-600 rounded-full px-4 py-3 text-xl text-white outline-none bg-transparent mt-3' type="password" placeholder='Enter Password' />
            <button className=' border-none rounded-3xl px-12 py-2 text-2xl text-white outline-none bg-emerald-600 mt-3 '>Log In</button>


        </form>

    </div>

  </div>
  )
}

export default Login