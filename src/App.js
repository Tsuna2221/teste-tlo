import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import LogPage from './components/Login/LogPage'
import MainPage from './components/Main/MainPage'

class App extends Component {
    render() {
        return (
            <div className='App'>
				<Router>
					<Route path="/" exact component={MainPage}/>
					<Route path="/login/" component={LogPage} />
				</Router>
            </div>
        );
    }

    state = {

    }
}

export default App;