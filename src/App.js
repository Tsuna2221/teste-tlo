import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Components
import LogPage from './components/Login/LogPage'

class App extends Component {
    render() {
        return (
            <div className='App'>
				<Router>
					<Route path="/" exact component={Main}/>
					<Route path="/login/" component={LogPage} />
				</Router>
            </div>
        );
    }

    state = {

    }
}

export default App;