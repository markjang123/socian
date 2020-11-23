import {connect} from 'react-redux'
import {setCurrentTrack, setPlayStatus} from '../../actions/current_track_actions'
import TracksIndexItem from './tracks_index_item'

const mapStateToProps = state => {
    return {
        isPlaying: state.currentTrack.isPlaying,
        currentTrack: state.currentTrack.track
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentTrack: track => dispatch(setCurrentTrack(track)),
        setPlayStatus: isPlaying => dispatch(setPlayStatus(isPlaying))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndexItem)