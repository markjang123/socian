import React from 'react'
import {Link} from 'react-router-dom'
import ProfileLinks from './profile_links'
class ProfileBio extends React.Component {
    render(){
        return (<div className="profile-bio">
                    <img src={this.props.pageUser.profile_image_url} className="profile-image" />
                    <p id="artist-name-location">
                        <p id="name">{this.props.pageUser.username}</p>
                        <p id="location">{this.props.pageUser.location || ""}</p>
                    </p>
                    <button className="follow-button">Follow</button>
                    <p className="artist-description">{this.props.pageUser.description || ""}</p>
                    <ProfileLinks />
                </div>)
    }
}

export default ProfileBio