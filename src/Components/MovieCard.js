import React from 'react'
import { CDN_URL } from '../Utils/constants';

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-3'>
      <img alt='np' src={CDN_URL + posterpath}></img>
    </div>
  )
}

export default MovieCard;
