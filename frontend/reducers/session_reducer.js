import {RECEIVE_CURRENT_USER_ID} from "../actions/session_actions"

const SessionReducer = (oldState = {currentUserId: null}, action) => {
    Object.freeze(oldState)

    switch(action.type){
        case RECEIVE_CURRENT_USER_ID:
            return action.userId
        default: 
            return oldState
    }
}

export default SessionReducer