import React from 'react'
import ProfilePostIndexItem from './profile_post_index_item'
class ProfilePostIndex extends React.Component {
    constructor(props){
        super(props)
    }
    isFollowing(){
        let user = this.props.pageUser.followers.find(user => user.id === this.props.currentUserId)
        return !!user
    }
    renderIfFollowing(){
        return this.isFollowing() ? 
        <ul className="profile-post-index">
            {this.props.pageUser.posts.map(post => <ProfilePostIndexItem post={post} pageUser={this.props.pageUser}/>)}
        </ul> : 
        <div className="locked-message">
            <h3 className="locked-message-header">
                Follow {this.props.pageUser.username} to join the conversation
            </h3>
            <p className="locked-message-body">
                When you follow {this.props.pageUser.username}, you’ll get access to exclusive messages from the artist and
                be the first to know when they release new music and merch.
            </p>
        </div>
        

    }
    render(){
        return this.renderIfFollowing()
    }
}


export default ProfilePostIndex