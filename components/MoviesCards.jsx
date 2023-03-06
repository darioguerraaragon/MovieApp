import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const MoviesCards = ({ movie }) => {

  console.log({ movie })

  const { original_title } = movie

  return (
    <div className='MovieCard'>

      { original_title }

      <img></img>
      <p><b></b></p>
      <div className='Clasificacion'>Clasificacion</div>
      <BrowserRouter>
        <Link to='/'>Ver!</Link>
      </BrowserRouter>
    </div>
  )
}

export default MoviesCards