import React, { Component, Fragment } from 'react';

//Partials
import { decodeCookie } from '../Partials/HandleCookies'

//Components
import Header from './Header'
import Posts from './Posts'
import Unauthorized from './Unauthorized'

const MainPage = () => (
    <div className='MainPage'>
        {
            decodeCookie('user') ?
                <Fragment>
                    <Header/>
                    <Posts/>
                </Fragment>
            :
                <Unauthorized/>
        }
        
    </div>
)

export default MainPage;