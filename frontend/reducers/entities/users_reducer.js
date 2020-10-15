import {RECEIVE_USER, REMOVE_USER} from '../../actions/user_actions'
const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState
        case REMOVE_USER:
            delete nextState[action.userId]
            return nextState
        default:
        return oldState
    }
}

export default UsersReducer