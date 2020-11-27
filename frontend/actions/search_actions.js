import {fetchAllSearches} from '../util/search_api_util'
export const RECEIVE_ALL_SEARCHES = 'RECEIVE_ALL_SEARCHES'
 
const receiveSearches = (searches) => {
    return {
        type: RECEIVE_ALL_SEARCHES,
        searches
    }
}

export const requestAllSearches = () => {
    return dispatch => {
        return fetchAllSearches()
            .then(response => {
                dispatch(receiveSearches(response))
            })
    }
}
