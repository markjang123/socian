import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const {currentUser, requestUser} = props
    if (!!currentUser){
        return (
            <div>
                Welcome {currentUser.username}
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/session/new">LOGIN LINK</Link>
                <Link to="/users/new">SIGNUP LINK</Link>
            </div>
        )
    }

}

export default Navbar;