export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK'
export const RECEIVE_PLAY_STATUS = 'RECEIVE_PLAY_STATUS'
 
const receiveCurrentTrack = currentTrack => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        currentTrack
    }
}
const receivePlayStatus = isPlaying => {
    return {
        type: RECEIVE_PLAY_STATUS,
        isPlaying
    }
}

export const setCurrentTrack = (track) => {
    return dispatch => {
        dispatch(receiveCurrentTrack(track))
    }
}
export const setPlayStatus = (isPlaying) => {
    return dispatch => {
        dispatch(receivePlayStatus(isPlaying))
    }
}
