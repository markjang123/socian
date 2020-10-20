import {RECEIVE_ALL_ALBUMS} from '../../actions/albums_actions' 
const AlbumsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch(action.type){
    case RECEIVE_ALL_ALBUMS:
        debugger
            for(const album of action.albums){
                nextState[album.id] = album
            }
            return nextState
        default:
            return oldState
    }
}

export default AlbumsReducer