import React from 'react'
import MoviesCards from './MoviesCards'

const Section = ({ data }) => {

  console.log({ data })

  if ( !data ) return <h1>No hay data</h1>

  return (
    <section>
      <article>
        {
          data.map(movie => (
            <MoviesCards
              key={movie.id} 
              movie={ movie }/>
          ))
        }
      </article>
    </section>
  )
}

export default Section