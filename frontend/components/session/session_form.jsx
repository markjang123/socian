import React from 'react'
import SessionErrors from '../errors/session_errors'
import {Link} from 'react-router-dom'
import {login} from '../../actions/session_actions'
import {clearSessionErrors} from '../../actions/session_actions'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUser = this.demoUser.bind(this)
    }

    handleSubmit(user){
        return e => {
            e.preventDefault()
            this.props.submitAction(user)
                .then((currentUserId) => {
                    this.props.history.push(`/users/${this.props.formType === "Log in" ? currentUserId : currentUserId.userId}`)
                })
        }
    }
    componentDidMount(){
        if (this.props.currentUserId){
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
                    <label htmlFor="username-or-email-field" className="form-label"> Username / email </label>
                    <input id="username-or-email-field" type="text" onChange={this.update("username_or_email")} value={this.state.usernameOrEmail} />
                </div>
            )
        } else {
            return (
                <div>
                    <div className="form-element">
                        <label className="form-label" htmlFor="username-field"> Username </label>
                        <input id="username-field" type="text" onChange={this.update("username")} value={this.state.username} />
                    </div>
                    <div className="form-element">
                        <label className="form-label"> Email </label>
                        <input type="text" onChange={this.update("email")} value={this.state.email} />
                    </div>
                    <div className="form-element">
                        <label className="form-label"> Type </label>
                        <select className="form-element" value={this.state.user_type} onChange={this.update("user_type")}>
                            <option defaultValue={true}>--select one--</option>
                            <option value="fan">fan</option>
                            <option value="artist">artist</option>
                        </select>
                    </div>
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
    demoUser(e){
        e.preventDefault()
        dispatch(login({username_or_email: "demoUser", password: "demopassword"}))
            .then((currentUserId) => this.props.history.push(`/users/${currentUserId}`))
    }
    render(){
        return (
            <div className="session-form-wrapper">
                <form className="session-form" onSubmit={this.handleSubmit(this.state)}> 
                <h3 className="form-header">{this.props.formType}</h3>
                <div className="divider" ></div>
                    {this.renderFields()}
                    <div className="form-element">
                        <label className="form-label" htmlFor="password-field"> Password </label>
                        <input id="password-field" type="password" onChange={this.update("password")} value={this.state.password}/>
                    </div>
                    <div className="form-element"> 
                        <input id="submit-button" type="submit" value={this.props.formType}/>
                    </div>
                    <div className="footer-container">
                        {this.renderBottomMessage()}
                        <a href="#" onClick={this.demoUser} id="demo-user-link">try as a demo user.</a>  
                    </div>
                </form>
                <SessionErrors className="errors-container"/>
            </div>
        )
    }
}

export default SessionForm