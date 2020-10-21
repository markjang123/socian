import React from 'react'
import ProfileBanner from './profile_banner'
import ProfileTabIndex from './profile_tab_index'
class ProfileBody extends React.Component {
    render(){
        return (<div className="profile-body">
                <ProfileBanner bannerUrl="https://f4.bcbits.com/img/0014522299_100.png"/>
                <ProfileTabIndex />
                </div>)
    }
}

export default ProfileBody