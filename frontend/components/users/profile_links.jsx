import React from 'react'
import {Link} from 'react-router-dom'
class ProfileLinks extends React.Component {
    render(){
        const {facebook_link, youtube_link, twitter_link, tumblr_link, soundcloud_link} = this.props.pageUser
        return (<ul className="profile-links">
                    {facebook_link && <li><a className="profile-link" target="_blank" href={facebook_link}>Facebook</a></li>}
                    {soundcloud_link && <li><a className="profile-link" target="_blank" href={soundcloud_link}>SoundCloud</a></li>}
                    {twitter_link && <li><a className="profile-link" target="_blank" href={twitter_link}>Twitter</a></li>}
                    {tumblr_link && <li><a className="profile-link" target="_blank" href={tumblr_link}>Tumblr</a></li>}
                    {youtube_link && <li><a className="profile-link" target="_blank" href={youtube_link}>YouTube</a></li>}
                </ul>)
    }
}

export default ProfileLinks