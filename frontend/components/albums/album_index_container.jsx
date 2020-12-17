import {connect} from 'react-redux'
import AlbumIndex from './album_index'
import {requestAlbums} from '../../actions/albums_actions'
const mapStateToProps = state => {
    return {
        albums: Object.values(state.entities.albums.all),
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAlbums: () => dispatch(requestAlbums())
    }
}

const AlbumIndexContainer = connect(mapStateToProps,mapDispatchToProps)(AlbumIndex)
export default AlbumIndexContainer