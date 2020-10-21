import {connect} from 'react-redux'
import Profile from './profile'
import {requestUser} from '../../actions/user_actions'

const mapStateToProps = (state,ownProps) => {
    debugger
    return {
        currentUserId: state.session.currentUserId,
        userPageId: ownProps.match.params.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer 