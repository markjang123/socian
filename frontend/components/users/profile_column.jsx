import React from 'react'
import {Link} from 'react-router-dom'
import ProfileBio from './profile_bio'
class ProfileColumn extends React.Component {
    render(){
        return (<div className="profile-column">
                    <ProfileBio requestUser={this.props.requestUser} pageUser={this.props.pageUser} currentUserId={this.props.currentUserId}/>
                </div>)
    }
}

export default ProfileColumn