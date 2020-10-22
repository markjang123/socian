import React from 'react'
import {Link} from 'react-router-dom'
import ProfileBio from './profile_bio'
class ProfileColumn extends React.Component {
    render(){
        return (<div className="profile-column">
                    <ProfileBio pageUser={this.props.pageUser}/>
                </div>)
    }
}

export default ProfileColumn