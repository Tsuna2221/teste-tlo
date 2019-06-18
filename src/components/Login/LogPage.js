import React, { Component } from 'react';

//Components
import LoginForm from './LogForm'

class LogPage extends Component {
    render() {
        return (
            <div className='LogPage ch-max-view bg-blue'>
                <LoginForm/>
            </div>
        );
    }

    state = {

    }
}

export default LogPage;