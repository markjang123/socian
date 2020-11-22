import React from 'react'
import {withRouter} from 'react-router-dom'
import ProfileAlbumIndex from './profile_album_index'
import ProfilePostIndex from './profile_post_index'
import ProfileProductIndex from './profile_product_index'
import AlbumShow from '../albums/album_show'
class ProfileTabContent extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {body: this.props.body}
    }
    renderTabComponent(){
        switch(this.props.body){
            case "posts":
                return <ProfilePostIndex />
            case "products":
                return <ProfileProductIndex />
            case "albums":
                return <ProfileAlbumIndex />
            case "albumShow":
                return <AlbumShow album={this.props.album} />
            default: 
                return <ProfileAlbumIndex />
        }
    }
    render(){
        debugger
        return (<div className="profile-tab-content">
                   {this.renderTabComponent()}
                </div>)
    }
}

export default withRouter(ProfileTabContent)