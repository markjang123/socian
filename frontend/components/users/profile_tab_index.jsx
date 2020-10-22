import React from 'react'
import {NavLink} from 'react-router-dom'
class ProfileTabIndex extends React.Component {
    render(){
        return (<div className="profile-tab-index">
                    <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/albums`}>music</NavLink>
                    <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/products`}>merch</NavLink>
                    <NavLink activeClassName="active" className="profile-tab" to={`/users/${this.props.pageUser.id}/posts`}>community</NavLink>
                </div>)
    }
}

export default ProfileTabIndex