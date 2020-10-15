import React from 'react'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(user){
        return e => {
            e.preventDefault()
            this.props.attemptLogin(user)
        }
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }
    render(){
        return (
            <div className="login-form-wrapper">
                <form className="login-form" onSubmit={this.handleSubmit(this.state)}> 
                    <h3>Log in</h3>
                    <label> Username / email
                        <input type="text" onChange={this.update("username_or_email")} value={this.state.usernameOrEmail} />
                    </label>
                    <label> Password
                        <input type="password" onChange={this.update("password")} value={this.state.password}/>
                    </label>
                    <input type="submit" value="Log in"/>
                </form>
            </div>
        )
    }
}

export default LoginForm