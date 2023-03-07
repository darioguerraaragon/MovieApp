import React, { useState } from 'react'
import Header from './Header'
import Section from './Section'

const MovieApp = () => {

  const [data, setData] = useState([])

  return (
    <div>
        <Header setData={setData} />
        <Section data={data} />
    </div>
  )
}

export default MovieApp