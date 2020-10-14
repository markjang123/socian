import * as UserApiUtils from '../util/user_api_util'
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const requestUser = userId => {
    return dispatch => {
        return UserApiUtils.fetchUser(userId)
            .then(response => dispatch(receiveUser(response)))
    }
}