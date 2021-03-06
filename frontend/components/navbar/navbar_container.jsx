import React from 'react'
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import Navbar from './navbar'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default withRouter(NavbarContainer)