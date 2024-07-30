import React from 'react'
import {auth} from '../Utils/FireBase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { LOGO } from '../Utils/constants';


const Header = () => {
   const user = useSelector(store => store.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayname,photoURL} = user;
        dispatch(addUser({uid : uid , email : email , displayname: displayname , photoURL:  photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe();
    
  },[])
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-full p-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 ' src={LOGO} alt='logo'>
      </img>
      {user &&  <div className ='flex mr-4'>
        <img className='w-16 h-16 ' 
        src={user.photoURL}       
         alt="np"></img>
        <button className='p-2 font-bold text-xl text-black' onClick={handleSignOut}>
          Sign out
        </button>
      </div>}
    </div>
  )
}

export default Header;
