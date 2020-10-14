import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const {currentUser, requestUser} = props
    if (!!currentUser){
        return (
            <div>
                {currentUser.username}
            </div>
        )
    } else {
        return (
            <div>
                LOGOUT BUTTON
            </div>
        )
    }

}

export default Navbar;