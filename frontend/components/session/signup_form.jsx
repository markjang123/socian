import React from 'react'

class SignupForm extends React.Component {
    render(){
        return (
            <form>
                <input type="text"/>
                <label> email:
                    <input type="text"/>
                </label>
                <label> user type:
                    <input type="text"/>
                </label>
                <input type="password"/>
                
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

export default SignupForm