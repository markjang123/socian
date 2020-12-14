import React from 'react'
import {Link} from 'react-router-dom'
class FollowingIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Link to={`/users/${this.props.user.id}`} className="following-index-link">
            <div className="following-index-item">
                <img src={this.props.user.profile_image_url} className="following-index-image"/>
                <div className="following-index-info">
                    <p className="following-index-username">{this.props.user.username}</p>
                    <p className="following-index-location">{this.props.user.location}</p>
                    <p className="following-index-type">{this.props.user.user_type.toUpperCase()}</p>
                </div>
            </div>
            </Link>
        )
    }
}

export default FollowingIndexItem