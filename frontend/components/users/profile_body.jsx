import React from 'react'
import ProfileBanner from './profile_banner'
import ProfileTabIndex from './profile_tab_index'
import ProfileColumn from './profile_column'
import ProfileTabContent from './profile_tab_content'
class ProfileBody extends React.Component {
    constructor(props){
        super(props)
        // this.state = {body: this.props.body}
    }
    render(){
        let defaultTab = this.props.pageUser.user_type === "artist" ? "albums" : "following"
        return (<div className="profile-body">
                    <ProfileBanner pageUser={this.props.pageUser} />
                    <ProfileTabIndex body={this.props.body} pageUser={this.props.pageUser}/>
                    <ProfileColumn pageUser={this.props.pageUser} requestUser={this.props.requestUser} currentUserId={this.props.currentUserId} />
                    <ProfileTabContent 
                    albums={this.props.albums}
                    album={this.props.album} 
                    body={this.props.body || defaultTab} 
                    pageUser={this.props.pageUser}
                    currentUserId={this.props.currentUserId}
                    />
                </div>)
    }
}

export default ProfileBody