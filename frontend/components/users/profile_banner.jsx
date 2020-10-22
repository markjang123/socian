import React from 'react'
import {Link} from 'react-router-dom'
class ProfileBanner extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <Link to={`/users/${this.props.pageUser.id}`}>
            <img className="profile-banner" src={this.props.bannerUrl} />
        </Link>
        )
    }
}

export default ProfileBanner