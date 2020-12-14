import React from 'react'
import {withRouter} from 'react-router-dom'
import ProfileAlbumIndex from './profile_album_index'
import ProfilePostIndex from './profile_post_index'
import ProfileProductIndex from './profile_product_index'
import AlbumShowContainer from '../albums/album_show_container'
import FollowingIndex from '../users/following_index'
class ProfileTabContent extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {body: this.props.body}
    }
    renderTabComponent(){
        console.log(this.props)
        switch(this.props.body){
            case "posts":
                return <ProfilePostIndex pageUser={this.props.pageUser} currentUserId={this.props.currentUserId}/>
            case "products":
                return <ProfileProductIndex pageUser={this.props.pageUser}/>
            case "albums":
                return <ProfileAlbumIndex pageUser={this.props.pageUser} albums={this.props.albums}/>
            case "albumShow":
                return <AlbumShowContainer />
            case "following": 
                return <FollowingIndex pageUser={this.props.pageUser}/>
            default: 
            if (this.props.pageUser.user_type === "artist"){
                return <ProfileAlbumIndex pageUser={this.props.pageUser}/>
            } else {
                return <p>this is who youre following DEFAULT</p>
            }
        }
    }
    render(){
        return (<div className="profile-tab-content">
                   {this.renderTabComponent()}
                </div>)
    }
}

export default withRouter(ProfileTabContent)