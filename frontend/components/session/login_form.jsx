import React from 'react'

class LoginForm extends React.Component {
    render(){
        return (
            <form>
                <input type="text"/>
                <input type="password"/>
                <input type="submit" value="Sign In"/>
            </form>
        )
    }
}

export default LoginForm