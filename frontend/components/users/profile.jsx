import React from 'react'

class Profile extends React.Component {
    constructor(props){
        super(props)
        props.requestUser(props.currentUserId)
            .then(response => {
                let appState = getState()
                this.setState({currentUser: appState.entities.users[props.currentUserId]})
            })
        this.state = {}
    }
  
    renderCorrectly(){
        if (!!this.state.currentUser){
        return <h3>{this.state.currentUser.username}'s Page</h3>
        } else {
            return null
        }
    }
    render(){
        let state = getState()
        console.log(state)
        return this.renderCorrectly()
    }
}

export default Profile