import React, { Component } from 'react';

//Components
import InputTemp from './InputTemp'

class SearchBar extends Component {
    render() {
        let { className } = this.props
        return (
            <form onSubmit={this.handleSubmit} className={`SearchBar d-flex ${className ? className : ""}`}>
                <InputTemp placeholder="Enter a subreddit name" func={this.handleInput} className="cw-50 mar-r-10"/>
                <span onClick={this.handleSubmit} className="mdi mdi-arrow-right bg-blue br-circle c-white cw-fit clickable sd-medium s-22 ch-fit pad-8"></span>
            </form>
        );
    }

    state = {
        input: ""
    }

    handleInput = ({target: {value}}) => this.setState({input: value})

    handleSubmit = (e) => {
        e.preventDefault()
        let { input } = this.state
        
        if(input.length > 0){
            let { origin } = window.location
        
            window.location.href = `${origin}/?sub=${input}`
        }
    }
}

export default SearchBar;