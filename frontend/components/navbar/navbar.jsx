import React from 'react';
import {Link} from 'react-router-dom'
import SearchContainer from './search_container'
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
            <div className={!isSessionForm() ? "navbar-wrapper" : "navbar-wrapper grayed"}>
                <nav className={!isSessionForm() ? "navbar" : "navbar grayed"}>
                    <div className="logo-search-wrapper">
                        <Link className="navbar-home-link" to="/">
                            <img id="logo-link" src={window.image} />
                        </Link>
                        {isSessionForm() ? null : <SearchContainer />}
                    </div>
                    {isSessionForm() ? null : renderLinks()}
                </nav>
            </div>
        )
    }



export default Navbar;