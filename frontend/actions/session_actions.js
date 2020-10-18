import * as SessionUtils from '../util/session_api_util'
export const RECEIVE_CURRENT_USER_ID = 'RECEIVE_CURRENT_USER_ID';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'

const receiveCurrentUserId = (userId) => {
    return {
        type: RECEIVE_CURRENT_USER_ID,
        userId
    }
}

const receiveSessionErrors = (sessionErrors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        sessionErrors
    }
}

const removeSessionErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS
    }
}


export const signup = (user) => {
    return dispatch => {
       return SessionUtils.signup(user)
                .then(response => dispatch(receiveCurrentUserId(response.id)))
                .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors)))
    }
}
export const login = (user) => {
    return dispatch => {
       return SessionUtils.login(user)
                .then(response => {
                    dispatch(receiveCurrentUserId(response.id))
                    return response.id
                })
                .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors)))
    }
}
export const logout = () => {
    return dispatch => {
        return SessionUtils.logout()
            .then(response => dispatch(receiveCurrentUserId(null)))
            .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors)))
    }
}

export const clearSessionErrors = () => {
    return dispatch => {
        dispatch(removeSessionErrors())
    }
}