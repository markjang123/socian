import React from 'react'
import ProfileBody from './profile_body'
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {pageUser: props.pageUser}
    }
    componentDidMount(){
        debugger
        this.props.requestUser(this.props.userPageId)
        this.props.requestUserAlbums(this.props.userPageId)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.requestUser(this.props.userPageId)
            this.props.requestUserAlbums(this.props.userPageId)
        }
    }
  
    renderIfStateIsDefined(){
        if (!!this.props.pageUser){
        return (<div className="profile-container">
                <ProfileBody 
                body={this.props.body || "albums"} pageUser={this.props.pageUser} currentUserId={this.props.currentUserId} requestUser={this.props.requestUser} albums={this.props.albums}/>
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