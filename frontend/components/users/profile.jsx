import React from 'react'

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
        debugger
        if (!!this.state.pageUser){
        return <h3>{this.state.pageUser.username}'s Profile Page</h3>
        } else {
            return null
        }
    }
    render(){
        return this.renderIfStateIsDefined()
    }
}

export default Profile