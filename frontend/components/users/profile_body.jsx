import React from 'react'
import ProfileBanner from './profile_banner'
import ProfileTabIndex from './profile_tab_index'
import ProfileColumn from './profile_column'
import ProfileTabContent from './profile_tab_content'
class ProfileBody extends React.Component {
    render(){
        return (<div className="profile-body">
                    <ProfileBanner pageUser={this.props.pageUser} />
                    <ProfileTabIndex pageUser={this.props.pageUser}/>
                    <ProfileColumn pageUser={this.props.pageUser} />
                    <ProfileTabContent pageUser={this.props.pageUser}/>
                   
                </div>)
    }
}

export default ProfileBody