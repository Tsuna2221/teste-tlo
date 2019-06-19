import React from 'react';
import { decodeCookie } from '../Partials/HandleCookies'

const { email } = decodeCookie('user') ? decodeCookie('user') : {}

const subList = ['pics', 'news', 'funny', 'gaming', 'worldnews', 'gifs', 'movies', 'earthporn', 'memes', 'videos', 'unexpected']

const drawList = subList.map(sub => (
    <li key={sub}><a className="mar-h-10 w-medium s-13 c-white" href={`./?sub=${sub}`}>r/{sub}</a></li>
))

const Header = () => (
    <div className='Header d-flex a-vertical bg-blue pad-h-30'>
        <ul className="d-flex">
            {drawList}
        </ul>
        {
            email ? 
                <span className="w-medium s-13 c-white">Logged as: {email}</span>
            :
                <a href="/login" className="w-medium s-13 c-white">Log In</a>
        }
    </div>
)

export default Header;