import {RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS} from '../../actions/session_actions'

const SessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)

    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.sessionErrors
        case REMOVE_SESSION_ERRORS:
            return []
        default: 
            return oldState
    }
}

export default SessionErrorsReducer