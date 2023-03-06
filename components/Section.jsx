import React from 'react'
import MoviesCards from './MoviesCards'

const Section = ({data}) => { 
  console.log(data)
  data = [1 ,2 ]
  return (
    <section>
      <article>
        {data == undefined?null:data.map((el)=>(<MoviesCards key={el.id}/>))}
        {/* {box.map((el)=>(<MoviesCards/>))} */}
      </article>     
    </section>
  )
  }

export default Section