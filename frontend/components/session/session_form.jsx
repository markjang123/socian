import React from 'react'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(user){
        return e => {
            e.preventDefault()
            this.props.submitAction(user)
        }
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }
    renderFields(){
        if (this.props.formType === "Log in"){
            return (
                <label> Username / email
                    <input type="text" onChange={this.update("username_or_email")} value={this.state.usernameOrEmail} />
                </label>
            )
        } else {
            return (
                <div>
                    <label> Username
                        <input type="text" onChange={this.update("username")} value={this.state.username} />
                    </label>
                    <label> Email
                        <input type="text" onChange={this.update("email")} value={this.state.email} />
                    </label>
                    <label> Are you a fan or an artist?
                        <input type="text" onChange={this.update("user_type")} value={this.state.user_type} />
                    </label>
                    <label> Location
                        <input type="text" onChange={this.update("location")} value={this.state.location} />
                    </label>
                    <label> Description
                        <input type="text" onChange={this.update("description")} value={this.state.description} />
                    </label>
                </div>
            )
        }

    }
    render(){
        return (
            <div className="session-form-wrapper">
                <form className="session-form" onSubmit={this.handleSubmit(this.state)}> 
                    <h3>{this.props.formType}</h3>
                    {this.renderFields()}
                    <label> Password
                        <input type="password" onChange={this.update("password")} value={this.state.password}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm