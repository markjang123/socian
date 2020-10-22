import * as AlbumsApiUtil from '../util/albums_api_utils'
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'
 
const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums: albums
    }
}

export const requestAlbums = () => {
    return dispatch => {
        return AlbumsApiUtil.fetchAllAlbums()
            .then(response => {
                dispatch(receiveAlbums(response))
            })
    }
}
export const requestUserAlbums = (userId) => {
    return dispatch => {
        return AlbumsApiUtil.fetchUserAlbums(userId)
            .then(response => {
                dispatch(receiveAlbums(response))
            })
    }
}