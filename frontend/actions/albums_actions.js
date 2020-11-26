import * as AlbumsApiUtil from '../util/albums_api_utils'
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'
export const RECEIVE_USER_ALBUMS = 'RECEIVE_USER_ALBUMS'
 
const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums: albums
    }
}
const receiveUserAlbums = (albums) => {
    return {
        type: RECEIVE_USER_ALBUMS,
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
                dispatch(receiveUserAlbums(response))
            })
    }
}
export const requestAlbum = (albumId) => {
    return dispatch => {
        return AlbumsApiUtil.fetchAlbum(albumId)
            .then(response => {
                dispatch(receiveAlbums(response))
            })
    }
}