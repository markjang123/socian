import React from 'react'
import {withRouter} from 'react-router-dom'
import ProfileAlbumIndex from './profile_album_index'
import ProfilePostIndex from './profile_post_index'
import ProfileProductIndex from './profile_product_index'
class ProfileTabContent extends React.Component {
    constructor(props) {
        super(props)
    }
    renderTabComponent(){
        const {pathname} = this.props.location
        if (pathname.includes("posts")){
            return <ProfilePostIndex />
        } else if (pathname.includes("products")){
            return <ProfileProductIndex />
        } else {
            return <ProfileAlbumIndex />
        }
    }
    render(){
        return (<div className="profile-tab-content">
                   {this.renderTabComponent()}
                </div>)
    }
}

export default withRouter(ProfileTabContent)