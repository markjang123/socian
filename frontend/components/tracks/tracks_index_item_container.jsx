import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setCurrentTrack, setPlayStatus} from '../../actions/current_track_actions'
import { requestUser } from '../../actions/user_actions'
import TracksIndexItem from './tracks_index_item'

const mapStateToProps = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.currentUserId]
    return {
        isPlaying: state.currentTrack.isPlaying,
        currentTrack: state.currentTrack.track,
        liked: currentUser ? currentUser.tracks_liked.some(track => track.id === ownProps.track.id) : false,
        currentUserId: state.session.currentUserId,
        likes_given: currentUser ? currentUser.likes_given : []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentTrack: track => dispatch(setCurrentTrack(track)),
        setPlayStatus: isPlaying => dispatch(setPlayStatus(isPlaying)),
        requestUser: userId => dispatch(requestUser(userId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TracksIndexItem))