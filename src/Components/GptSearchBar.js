import React from 'react'
import lang from "../Utils/languageConstants"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
   
    const langkey = useSelector(store=> store.config.lang)

  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input className='p-4 m-4 col-span-9 rounded-md' type='text' placeholder={lang[langkey]. gptSearchPlaceholder}></input>
        <button className='bg-red-700 py-2 px-4 m-4 col-span-3 rounded-lg font-bold text-xl'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
