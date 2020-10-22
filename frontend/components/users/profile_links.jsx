import React from 'react'
import {Link} from 'react-router-dom'
class ProfileLinks extends React.Component {
    render(){
        return (<ul className="profile-links">
                    <li className="profile-link"><a href="#">Facebook</a></li>
                    <li className="profile-link"><a href="#">SoundCloud</a></li>
                    <li className="profile-link"><a href="#">Twitter</a></li>
                    <li className="profile-link"><a href="#">Tumblr</a></li>
                    <li className="profile-link"><a href="#">YouTube</a></li>
                </ul>)
    }
}

export default ProfileLinks