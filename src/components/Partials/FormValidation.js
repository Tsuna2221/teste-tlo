const validate = (email, password) => {
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var test = exp.test(email)
    var digitTest = /\d/.test(password)
    var letterTest = /[a-zA-Z]/.test(password)

    if(!test){
        return {
            valid: false,
            message: "Invalid Email, please enter a valid one."
        }
    }else{
        if(password.length >= 6){
            if(!digitTest){
                return {
                    valid: false,
                    message: 'Password needs to contain at least one number'
                }
            }else{
                if(!letterTest){
                    return {
                        valid: false,
                        message: 'Password needs to contain at least one letter'
                    }
                }
            }
        }else{
            return {
                valid: false,
                message: "Password needs to have more than 5 digits."
            }
        }

        return {
            valid: true,
            message: "All set! Logging you in."        
        }
    }
}

export { validate }