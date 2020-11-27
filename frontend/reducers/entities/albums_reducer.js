import {RECEIVE_ALL_ALBUMS, RECEIVE_USER_ALBUMS} from '../../actions/albums_actions' 
const AlbumsReducer = (oldState = {all: {}, user: {}}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch(action.type){
    case RECEIVE_ALL_ALBUMS:
            for(const album of action.albums){
                nextState.all[album.id] = album
            }
            return nextState
    case RECEIVE_USER_ALBUMS:
        nextState.user = {}
        for(const album of action.albums){
            nextState.user[album.id] = album
        }
            return nextState
        default:
            return oldState
    }
}

export default AlbumsReducer