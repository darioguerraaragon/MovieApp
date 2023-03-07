import React, { useState } from 'react'
import {
    Link,
    BrowserRouter,
    Routes
} from 'react-router-dom'

const Header = ({ setData }) => {

    const [search, setSearch] = useState('')

    const handleSearch = ({ target }) => setSearch(target.value)

    const handleData = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=${search}`)
                            .then(res => res.json())

        setData(res.results)
    }

    return (
        <header>
            <nav>
                <img></img>
                <div className='searchNav'>
                    <div className='searchIcon'><img src='./imgs/loupe.png' /></div>
                    <input 
                        className='inputS' 
                        type='text' 
                        placeholder='Search any movie' 
                        onChange={handleSearch}/>
                    <button onClick={handleData}>Buscar</button>
                </div>

                <div className='infos'>
                    <BrowserRouter>
                        <Link to="/About us">About us</Link>
                        <Link to="/facebook">Facebook</Link>
                        <Link to="/PayPal">PayPal</Link>
                        <Link to="/Api">Api</Link>

                        <Routes></Routes>
                    </BrowserRouter>
                </div>
            </nav>
        </header>
    )
}

export default Header