import {connect} from 'react-redux'
import Profile from './profile'
import {requestUser} from '../../actions/user_actions'
import {requestUserAlbums} from '../../actions/albums_actions'

const mapStateToProps = (state,ownProps) => {
    return {
        currentUserId: state.session.currentUserId,
        userPageId: ownProps.match.params.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId)),
        requestUserAlbums: (userId) => dispatch(requestUserAlbums(userId))
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer 