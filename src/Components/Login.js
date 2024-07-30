import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../Utils/FireBase'
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { LOGIN_AVATAR } from '../Utils/constants';


const Login = () => {

    
    const dispatch = useDispatch();
    
    const [isSignIn,setSignIn] = useState(true) 
    const [errorMessage,setErrorMessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =()=>{
      
      // console.log(email.current.value);
      // console.log(password.current.value);
      const message =  checkValidData(email.current.value,password.current.value)
      console.log(message);
      setErrorMessage(message);
      if(message) return
      
      if(!isSignIn){
        //sign-up
        createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    updateProfile(user , {
      displayName:name.current.value, photoURL: LOGIN_AVATAR ,
    }).then(() => {
      // Profile updated!
      const {uid,email,displayname,photoURL} = auth.currentUser;
      dispatch(addUser({uid : uid , email : email , displayname: displayname , photoURL:  photoURL}));
     
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });

      }
      else {
        // Sign-in
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }

      }

    const toggleSignIn =()=>{
      setSignIn(!isSignIn)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg'></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-40 mx-auto left-0 right-0 text-white cursor-pointer bg-opacity-85'>
        <h1 className='font-bold text-2xl py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignIn && (<input ref={name}
        type='text' 
        placeholder='Name'
        className='p-2 mx-2 my-2 w-full bg-gray-500'>
        </input>)}

        <input ref={email} 
        type='text' 
        placeholder='Email Address' 
        className='p-2 mx-2 my-2 w-full bg-gray-500'/>

        <input ref={password} 
        type='password' 
        placeholder='Password' 
        className='p-2 mx-2 my-2 w-full bg-gray-500'/> 

        {!isSignIn && (<input  
        type='password' placeholder='Confirm password' 
        className='p-2 mx-2 my-2 w-full bg-gray-500'></input>)}

        <p className='text-sm text-red-600 p-2'>{errorMessage}</p>
        <button className= 'p-2 mx-2 my-2 bg-red-700 w-full rounded-lg 'onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='p-2 my-6 font-semibold text-sm'onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign Up " : "Already a User? Sign In"}</p>
      </form>
    </div>
  )
}


export default Login
