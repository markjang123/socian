import React from 'react'
import {Link} from 'react-router-dom'
class ProfileLinks extends React.Component {
    render(){
        return (<ul className="profile-links">
                    <li className="profile-link"><a target="_blank" href="http://www.facebook.com/kerokerobonito">Facebook</a></li>
                    <li className="profile-link"><a target="_blank" href="http://www.soundcloud.com/kerokerobonito">SoundCloud</a></li>
                    <li className="profile-link"><a target="_blank" href="http://www.twitter.com/KeroKeroBonito">Twitter</a></li>
                    <li className="profile-link"><a target="_blank" href="http://www.kerokerobonito.tumblr.com/">Tumblr</a></li>
                    <li className="profile-link"><a target="_blank" href="http://www.youtube.com/user/KeroKeroBonito">YouTube</a></li>
                </ul>)
    }
}

export default ProfileLinks