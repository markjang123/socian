import React from 'react'
import ProfileBody from './profile_body'
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {pageUser: props.pageUser}
    }
    componentDidMount(){
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
                body={this.props.body} pageUser={this.props.pageUser} currentUserId={this.props.currentUserId} requestUser={this.props.requestUser} albums={this.props.albums}/>
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