import {connect} from 'react-redux'
import Profile from './profile'
import requestUser from '../../actions/user_actions'

const mapStateToProps = state => {
    return {
        currentUser = state.entities.users[state.session.currentUserId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)