import {connect} from 'react-redux'
import Profile from './profile'
import {requestUser} from '../../actions/user_actions'
import {requestUserAlbums} from '../../actions/albums_actions'

const mapStateToProps = (state,ownProps) => {
    let userPageId = ownProps.match.params.userId
    return {
        currentUserId: state.session.currentUserId,
        userPageId, 
        pageUser: state.entities.users[userPageId]
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