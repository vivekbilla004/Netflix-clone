import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    
    const [isSignIn,setSignIn] = useState(true)

    const toggleSignIn =()=>{
      setSignIn(!isSignIn)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg'></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-40 mx-auto left-0 right-0 text-white cursor-pointer bg-opacity-85'>
        <h1 className='font-bold text-2xl py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <input type='text' placeholder='Email Address' className='p-2 mx-2 my-2 w-full bg-gray-500'/>
        {!isSignIn && (<input type='text' placeholder='Fullname' className='p-2 mx-2 my-2 w-full bg-gray-500'></input>)}
        <input type='password' placeholder='Password' className='p-2 mx-2 my-2 w-full bg-gray-500'/>
        {!isSignIn && (<input type='text' placeholder='Confirm password' className='p-2 mx-2 my-2 w-full bg-gray-500'></input>)}
        <button className= 'p-2 mx-2 my-2 bg-red-700 w-full rounded-lg 'onClick={toggleSignIn}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='p-2 my-6 font-semibold text-sm'onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign Up " : "Already a User? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
