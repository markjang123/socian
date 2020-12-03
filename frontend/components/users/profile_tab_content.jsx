import React from 'react'
import {withRouter} from 'react-router-dom'
import ProfileAlbumIndex from './profile_album_index'
import ProfilePostIndex from './profile_post_index'
import ProfileProductIndex from './profile_product_index'
import AlbumShowContainer from '../albums/album_show_container'
class ProfileTabContent extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {body: this.props.body}
    }
    renderTabComponent(){
        switch(this.props.body){
            case "posts":
                return <ProfilePostIndex pageUser={this.props.pageUser} currentUserId={this.props.currentUserId}/>
            case "products":
                return <ProfileProductIndex pageUser={this.props.pageUser}/>
            case "albums":
                return <ProfileAlbumIndex pageUser={this.props.pageUser} albums={this.props.albums}/>
            case "albumShow":
                return <AlbumShowContainer />
            default: 
            return <ProfileAlbumIndex pageUser={this.props.pageUser}/>
        }
    }
    render(){
        return (<div className="profile-tab-content">
                   {this.renderTabComponent()}
                </div>)
    }
}

export default withRouter(ProfileTabContent)