import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const MoviesCards = ({ movie }) => {

  const { title , poster_path } = movie

  return (
    <div className='MovieCard'>

      <img src={`${poster_path}`}/>
      <p><b>{title}</b></p>
      <div className='Clasificacion'>Clasificacion</div>
      <BrowserRouter>
        <Link to='/'>Ver!</Link>
      </BrowserRouter>
      
    </div>
  )
}

export default MoviesCards