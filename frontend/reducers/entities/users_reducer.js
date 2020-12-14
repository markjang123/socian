import {RECEIVE_USER, REMOVE_USER} from '../../actions/user_actions'
import {RECEIVE_CURRENT_USER_ID} from '../../actions/session_actions'
const UsersReducer = (oldState = {}, action) => {
    debugger
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState
        case REMOVE_USER:
            delete nextState[action.userId]
            return nextState
        // case RECEIVE_CURRENT_USER_ID:
        //     nextState[action.user.id] = action.userId
        default:
        return oldState
    }
}

export default UsersReducer