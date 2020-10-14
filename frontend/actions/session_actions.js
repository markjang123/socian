import * as SessionUtils from '../util/session_api_util'
export const RECEIVE_CURRENT_USER_ID = 'RECEIVE_CURRENT_USER_ID';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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


export const signup = (user) => {
    return dispatch => {
       return SessionUtils.signup(user)
                .then(response => dispatch(receiveCurrentUserId(response.id)))
                .catch(response => dispatch(receiveSessionErrors(response.errors)))
    }
}
export const login = (user) => {
    return dispatch => {
       return SessionUtils.login(user)
                .then(response => dispatch(receiveCurrentUserId(response.id)))
                .catch(response => dispatch(receiveSessionErrors(response.errors)))
    }
}
export const logout = () => {
    return dispatch => {
        return SessionUtils.logout()
            .then(response => dispatch(receiveCurrentUserId(null)))
            .catch(response => dispatch(receiveSessionErrors(response.errors)))
    }
}