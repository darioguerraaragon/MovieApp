import React from 'react'
import {Link , BrowserRouter , Route ,Routes , Navigate} from 'react-router-dom'
import { useState } from 'react'
import Section from './Section'

const Header = () => {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState('')

    const HandleSearch = (e) => {setsearch(e.target.value)}
    
    const HandleData = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=${search}`)
            .then((res)=>{return res.json()})
            .then((res)=>{setdata(res.results)})
    }
    

  return (
    <header>       
        <div className='d-none'>
            <Section data={data}/>
        </div>
        <nav>
            <img></img>
            <div className='searchNav'>
                <div className='searchIcon'><img src='./imgs/loupe.png' /></div>
                <input className='inputS' type='text' placeholder='Search any movie' onChange={HandleSearch}></input>
                <button onClick={HandleData}>Buscar</button>
            </div>

            <div className='infos'>
                <BrowserRouter>
                    <Link to="/About us">About us</Link>
                    <Link to="/facebook">Facebook</Link>
                    <Link to="/PayPal">PayPal</Link>
                    <Link to="/Api">Api</Link>
                    <Link to="/Acount" className='acount'>Acount</Link>
                    
                    <Routes></Routes>
                </BrowserRouter>            
            </div>
        </nav>
    </header>
  )
}

export default Header