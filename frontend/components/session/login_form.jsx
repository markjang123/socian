import React from 'react'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="login-form-wrapper">
                <form className="login-form"> 
                    <h3>Log in</h3>
                    <label> Username / email
                        <input type="text"/>
                    </label>
                    <label> Password
                        <input type="password"/>
                    </label>
                    <input type="submit" value="Log in"/>
                </form>
            </div>
        )
    }
}

export default LoginForm