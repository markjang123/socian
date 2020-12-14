import * as UserApiUtils from '../util/user_api_util'
export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'
const receiveUser = user => {
    debugger
    return {
        type: RECEIVE_USER,
        user
    }
}

const removeUser = userId => {
    return {
        type: REMOVE_USER,
        userId
    }
}

export const requestUser = userId => {
    debugger
    return dispatch => {
        return UserApiUtils.fetchUser(userId)
            .then(response => {
                dispatch(receiveUser(response))
                return response
            })
    }
}
export const deleteUser = userId => {
    return dispatch => {
        return UserApiUtils.fetchUser(userId)
            .then(response => dispatch(removeUser(response.id)))
    }
}