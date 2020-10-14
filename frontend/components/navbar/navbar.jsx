import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const {currentUser, requestUser} = props
    if (!!currentUser){
        return (
            <nav className="navbar">
                Welcome {currentUser.username}
            </nav>
        )
    } else {
        return (
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <Link className="navbar-link" to="/">
                        socian
                    </Link>
                    <input type="text" placeholder="Search and discover music"/>
                    <Link className="navbar-link" to="/users/new">sign up</Link>
                    <Link className="navbar-link" to="/session/new">log in</Link>
                </nav>
            </div>
        )
    }

}

export default Navbar;