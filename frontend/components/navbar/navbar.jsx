import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const {currentUser, logout} = props
    const {pathname} = props.location
    const isSessionForm = () => {
        return pathname === "/session/new" || pathname === "/users/new"
    }
    const renderLinks = () => {
        if (!!currentUser){
            return (
                <div className="navbar-user-links">
                    <Link className="navbar-link" to={`/users/${currentUser.id}`}>profile</Link>
                    <Link className="navbar-link" to="/" onClick={logout}>log out</Link>
                </div>
            )
        } else {
            return (
                <div className="navbar-user-links">
                    <Link className="navbar-link" to="/users/new">sign up</Link>
                    <Link className="navbar-link" to="/session/new">log in</Link>
                </div>
            )
        }
    }
  
        return (
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <Link className="navbar-link" to="/">
                        <img id="logo-link" src={window.image} />
                    </Link>
                    {isSessionForm() ? null: <input type="text" placeholder="Search and discover music"/>}
                    {isSessionForm() ? null : renderLinks()}
                </nav>
            </div>
        )
    }



export default Navbar;