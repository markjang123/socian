import React from 'react'

class LoginForm extends React.Component {
    render(){
        return (
            <form className="login-form"> 
                <h1>Sign In</h1>
                <label> Username / email
                    <input type="text"/>
                </label>
                <label> Password
                    <input type="password"/>
                </label>
                <input type="submit" value="Log in"/>
            </form>
        )
    }
}

export default LoginForm