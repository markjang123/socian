import React from 'react'

class SignupForm extends React.Component {
    render(){
        return (
            <form> 
                <h1>Sign Up</h1>
                <label> Username:
                    <input type="text"/>
                </label>
                <label> Email:
                    <input type="text"/>
                </label>
                <label> user type:
                    <input type="text"/>
                </label>
                <label>Password:
                    <input type="password"/>
                </label>
                
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignupForm