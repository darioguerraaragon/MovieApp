import React from 'react'
import {Link  , BrowserRouter} from 'react-router-dom'

const MoviesCards = ({title , img , description}) => {
  //console.log(title)
  return (
        <div className='MovieCard'>
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