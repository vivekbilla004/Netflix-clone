import React from 'react'
import {auth} from '../Utils/FireBase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changelanguage } from '../Utils/configSlice';



const Header = () => {
   const user = useSelector(store => store.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch  =useSelector(store=> store.gpt.showGptSearch)
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

  const handleGptSearchClick = ()=>{
    //dispatching a function
    dispatch(toggleGptSearchView())

  }

  const handleLanguageChange =(e)=>{
    dispatch(changelanguage(e.target.value))
  }
  
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
        {showGptSearch && (<select className='bg-black text-white m-4 px-2'
        onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGES.map((lang)=> 
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )
          }
         
      
        </select>)}
        <button className='px-4 py-2 m-4 text-white bg-purple-800 rounded-lg' onClick={handleGptSearchClick}>
          {showGptSearch ? "Homepage" : "Search GPT"}
        </button>
        <img className='w-16 h-16 rounded-md mt-2 mr-1 ' 
        src={user.photoURL}       
         alt="np"></img>
        <button className='p-2 font-bold text-xl text-white' onClick={handleSignOut}>
          (Sign out)
        </button>
      </div>}
    </div>
  )
}

export default Header;
