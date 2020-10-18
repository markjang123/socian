import {connect} from 'react-redux'
import Profile from './profile'
import {requestUser} from '../../actions/user_actions'

const mapStateToProps = state => {
    return {
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer 