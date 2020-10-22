import React from 'react'
import {Link} from 'react-router-dom'
import ProfileLinks from './profile_links'
class ProfileBio extends React.Component {
    render(){
        return (<div className="profile-bio">
                    <img src="https://f4.bcbits.com/img/0014507555_21.jpg" className="profile-image" />
                    <p id="artist-name-location">
                        <p id="name">{this.props.pageUser.username}</p>
                        <p id="location">{this.props.pageUser.location || "London, UK"}</p>
                    </p>
                    <button className="follow-button">Follow</button>
                    <p className="artist-description">{this.props.pageUser.description || "Description"}</p>
                    <ProfileLinks />
                </div>)
    }
}

export default ProfileBio