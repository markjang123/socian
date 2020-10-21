import React from 'react'
import {NavLink} from 'react-router-dom'
class ProfileTabIndex extends React.Component {
    render(){
        return (<div className="profile-tab-index">
                    <NavLink activeClassName="active" className="profile-tab" to="/">music</NavLink>
                    <NavLink activeClassName="active" className="profile-tab" to="/">merch</NavLink>
                    <NavLink activeClassName="active" className="profile-tab" to="/">community</NavLink>
                </div>)
    }
}

export default ProfileTabIndex