import React from 'react'

class ProfileBanner extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <img className="profile-banner" src={this.props.bannerUrl} />
        )
    }
}

export default ProfileBanner