import {RECEIVE_CURRENT_TRACK, RECEIVE_PLAY_STATUS} from "../../actions/current_track_actions"

const CurrentTrackReducer = (oldState = {track: {}, isPlaying: false}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_CURRENT_TRACK:
            debugger
            nextState["track"] = action.currentTrack
            return nextState
        case RECEIVE_PLAY_STATUS:
            nextState["isPlaying"] = action.isPlaying
            return nextState
        default: 
            return oldState
    }
}

export default CurrentTrackReducer