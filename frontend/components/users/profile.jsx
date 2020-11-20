import React from 'react'
import ProfileBody from './profile_body'
class Profile extends React.Component {
    constructor(props){
        debugger
        super(props)
        props.requestUser(props.userPageId)
            .then(response => {
                debugger
                let appState = getState()
                this.setState({["pageUser"]: appState.entities.users[props.userPageId]})
            })
        this.state = {}
    }
    componentDidMount(){
        this.props.requestUserAlbums(this.props.userPageId)
    }
    // static getDerivedStateFromProps(props, state){
    //     debugger
    //     state["body"] = props.body
    //     return state
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     debugger
    //     return true
    // }
    renderIfStateIsDefined(){
        debugger
        if (!!this.state.pageUser){
        return (<div className="profile-container">
                <ProfileBody body={this.props.body} pageUser={this.state.pageUser}/>
        </div>)
        } else {
            return null
        }
    }
    render(){
        debugger
        return this.renderIfStateIsDefined()
    }
}

export default Profile