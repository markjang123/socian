import React from 'react'
import ProfileBody from './profile_body'
class Profile extends React.Component {
    constructor(props){
        super(props)
        debugger
        props.requestUser(props.userPageId)
            .then(response => {
                let appState = getState()
                this.setState({pageUser: appState.entities.users[props.userPageId]})
            })
        this.state = {}
    }
  
    renderIfStateIsDefined(){
        if (!!this.state.pageUser){
        return (<div className="profile-container">
                <ProfileBody />

        </div>)
        } else {
            return null
        }
    }
    render(){
        return this.renderIfStateIsDefined()
    }
}

export default Profile