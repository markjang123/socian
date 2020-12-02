import React from 'react'
import {Link} from 'react-router-dom'
import ProfileLinks from './profile_links'
import FollowButton from './follow_button'
class ProfileBio extends React.Component {
    
    render(){
        debugger
        return (<div className="profile-bio">
                    <img src={this.props.pageUser.profile_image_url} className="profile-image" />
                    <div id="artist-name-location">
                        <p id="name">{this.props.pageUser.username}</p>
                        <p id="location">{this.props.pageUser.location || ""}</p>
                    </div>
                    {this.props.pageUser.id !== this.props.currentUserId && <FollowButton requestUser={this.props.requestUser} pageUser={this.props.pageUser} currentUserId={this.props.currentUserId}/>}
                    <p className="artist-description">{this.props.pageUser.description || ""}</p>
                    <ProfileLinks />
                </div>)
    }
}

export default ProfileBio