import React from 'react'
import ProfileBody from './profile_body'
class Profile extends React.Component {
    constructor(props){
        debugger
        super(props)
        // props.requestUser(props.userPageId)
        //     .then(response => {
        //         debugger
        //         let appState = getState()
        //         this.setState({["pageUser"]: appState.entities.users[props.userPageId]})
        //     })
        this.state = {pageUser: props.pageUser}
    }
    componentDidMount(){
        this.props.requestUser(this.props.userPageId)
        this.props.requestUserAlbums(this.props.userPageId)
    }
    // componentWillReceiveProps(){
    //     this.props.requestUser(this.props.userPageId)
    //     this.props.requestUserAlbums(this.props.userPageId)
    // }
    componentDidUpdate(prevProps){
        debugger
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.requestUser(this.props.userPageId)
            this.props.requestUserAlbums(this.props.userPageId)
        }
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
        if (!!this.props.pageUser){
        return (<div className="profile-container">
                <ProfileBody 
                // album={this.props.album} 
                body={this.props.body || "albums"} pageUser={this.props.pageUser}/>
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