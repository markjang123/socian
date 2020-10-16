import React from 'react'
import SessionErrors from '../errors/session_errors'
import {Link} from 'react-router-dom'
import {clearSessionErrors} from '../../actions/session_actions'

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
                .then(() => this.props.requestUser(this.props.currentUserId))
                .then(() => this.props.history.push(`/users/${this.props.currentUserId}`))
        }
    }
    componentDidMount(){
        if (this.props.currentUserId){
            debugger
                dispatch(this.props.requestUser(this.props.currentUserId))
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
                <div className="form-element">
                    <label for="username-or-email-field" className="form-label"> Username / email </label>
                    <input id="username-or-email-field" type="text" onChange={this.update("username_or_email")} value={this.state.usernameOrEmail} />
                </div>
            )
        } else {
            return (
                <div>
                    <div className="form-element">
                        <label className="form-label" for="username-field"> Username </label>
                        <input id="username-field" type="text" onChange={this.update("username")} value={this.state.username} />
                    </div>
                    <div className="form-element">
                        <label className="form-label"> Email </label>
                        <input type="text" onChange={this.update("email")} value={this.state.email} />
                    </div>
                    <div className="form-element">
                        <label className="form-label"> Type </label>
                        <select className="form-element">
                            <option>fan</option>
                            <option>artist</option>
                        </select>
                        {/* <input className="form-element" type="select" onChange={this.update("user_type")} value={this.state.user_type} /> */}
                    </div>
                    {/* <div className="form-element">
                        <label className="form-label"> Location </label>
                        <input className="form-element" type="text" onChange={this.update("location")} value={this.state.location} />
                    </div>
                    <div className="form-element">
                        <label className="form-label"> Description </label>
                        <input className="form-element" type="text" onChange={this.update("description")} value={this.state.description} />
                    </div> */}
                </div>
            )
        }
    }
    renderBottomMessage(){
        if (this.props.formType === "Log in") {
            return (
                <p className="form-footer">Don't have an account? <Link className="form-link" to="/users/new">Sign up.</Link></p>
            )
        } else {
            return (
                <p className="form-footer">Already have an account? <Link className="form-link" to="/session/new">Log in.</Link></p>
            )
        }
    }
    render(){
        return (
            <div className="session-form-wrapper">

                <h3 className="form-header">{this.props.formType}</h3>
                <form className="session-form" onSubmit={this.handleSubmit(this.state)}> 
                    {this.renderFields()}
                    <div className="form-element">
                        <label className="form-label" for="password-field"> Password </label>
                        <input id="password-field" type="password" onChange={this.update("password")} value={this.state.password}/>
                    </div>
                    <div className="form-element"> 
                        <input id="submit-button" type="submit" value={this.props.formType}/>
                    </div>
                </form>
                <SessionErrors className="errors-container"/>
                {this.renderBottomMessage()}
            </div>
        )
    }
}

export default SessionForm