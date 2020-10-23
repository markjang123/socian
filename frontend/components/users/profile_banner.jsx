import React from 'react'
import {Link} from 'react-router-dom'
class ProfileBanner extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <Link to={`/users/${this.props.pageUser.id}`}>
            <img className="profile-banner" src={this.props.pageUser.banner_image_url} />
        </Link>
        )
    }
}

export default ProfileBanner