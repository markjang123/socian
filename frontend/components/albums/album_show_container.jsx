import {connect} from 'react-redux'
import AlbumShow from './album_show'
import {requestAlbum} from '../../actions/albums_actions'
import {withRouter} from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {
    let albumId = parseInt(ownProps.match.params.albumId)
    return {
        album: state.entities.albums.user[albumId],
        albumId, 
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAlbum: albumId => dispatch(requestAlbum(albumId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumShow))