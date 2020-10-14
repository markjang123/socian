import React from 'react'

class LoginForm extends React.Component {
    render(){
        return (
            <form> 
                <h1>Sign In</h1>
                <label> Username:
                    <input type="text"/>
                </label>
                <label> Password:
                    <input type="password"/>
                </label>
                <input type="submit" value="Sign In"/>
            </form>
        )
    }
}

export default LoginForm