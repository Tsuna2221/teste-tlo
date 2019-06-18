import React, { Component } from 'react';
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

//Components
import InputTemp from '../Templates/InputTemp'
import ButtonTemp from '../Templates/ButtonTemp'

//Partial
import { validate } from '../Partials/FormValidation'
import { setCookie, getCookie } from '../Partials/HandleCookies'

class LoginForm extends Component {
    render() {
        let { message: { msg, msgStatus } } = this.state
        return (
            <div className='LoginForm bg-white ch-fill d-flex a-center'>
                <div className="cw-fill">
                    <h2 className="c-blue s-26 txa-center">Log In</h2>
                    <form className="mar-t-14">
                        <InputTemp name="email" label="E-mail" type="email" func={this.handleInput}/>
                        <InputTemp className="mar-t-16" name="password" label="Password" type="password" func={this.handleInput}/>
                        <div className="d-flex a-horizontal mar-t-12">
                            <ButtonTemp func={this.handleSubmit} text="Enter" color="blue"/>
                        </div>
                    </form>

                    {
                        msg ? 
                            <p className={`mar-t-14 txa-center${msgStatus ? " c-"+msgStatus : ""}`}>{msg}</p>
                        :
                            <div></div>
                    }
                </div>
            </div>
        );
    }

    state = {
        message: {},
        form: {}
    }

    handleInput = ({target: { value, name }}) => this.setState({form: {...this.state.form, [name]: value}})

    handleSubmit = () => {
        let { email, password } = this.state.form
        let { message, valid } = validate(email, password)
        let expireMinutes = 60
        let key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);

        this.setState({
            message: {
                msg: message,
                msgStatus: valid ? "success" : "failed"
            }
        })

        if(valid){
            jwt.sign({ email, key }, key, { expiresIn: expireMinutes * 60 }, (err, token) => {
                setCookie('user', token, expireMinutes)
            });
        }
    }
}

export default LoginForm;
