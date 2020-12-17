import React from 'react'
import {NavLink} from 'react-router-dom'
class ProfileTabIndex extends React.Component {
    renderUserTabs(){
        return this.props.pageUser.user_type === "artist" ? 
         (<div className="profile-tab-index">
                    <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/albums`}>music</NavLink>
                    <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/products`}>merch</NavLink>
                    <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/posts`}>community</NavLink>
                </div>) : 
        (<div className="profile-tab-index">
            <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/following`}>following</NavLink>
            <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/wishlist`}>Wishlist</NavLink>
        </div>)

    }
    render(){
        return this.renderUserTabs()
    }
}

export default ProfileTabIndex