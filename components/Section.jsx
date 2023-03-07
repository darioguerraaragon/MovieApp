import React from 'react'
import MoviesCards from './MoviesCards'

const Section = ({data}) => { 
  console.log(data)
  if(!data)return <h1>There is no data</h1>
  
  return (
    <section>
      <article>
        {data == undefined?null:data.map((movie)=>(
          <MoviesCards 
            key={movie.id} 
            movie={movie} 

          />))}
      </article>     
    </section>
  )
}

export default Section