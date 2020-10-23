import React from 'react'
import ProfileBody from './profile_body'
class Profile extends React.Component {
    constructor(props){
        super(props)
        props.requestUser(props.userPageId)
            .then(response => {
                let appState = getState()
                this.setState({pageUser: appState.entities.users[props.userPageId]})
            })
        this.state = {}
    }
    componentDidMount(){
        this.props.requestUserAlbums(this.props.userPageId)
    }
    renderIfStateIsDefined(){
        if (!!this.state.pageUser){
        return (<div className="profile-container">
                <ProfileBody pageUser={this.state.pageUser}/>

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