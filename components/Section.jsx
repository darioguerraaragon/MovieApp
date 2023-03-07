import React from 'react'
import MoviesCards from './MoviesCards'

const Section = ({data}) => { 
  console.log(data)

  let box = []

  if(data == undefined){
    null
  }else{
    data.forEach(el => {
        box.push(1)
    });
  }

  console.log(box)
  
  return (
    <section>
      <article>
        {data == undefined?null:data.map((el)=>(<MoviesCards key={el.id}/>))}
        {box.map((el)=>(<MoviesCards/>))}
      </article>     
    </section>
  )
}

export default Section