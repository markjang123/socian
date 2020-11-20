import React from 'react'
import {withRouter} from 'react-router-dom'
import AlbumIndexItem from '../albums/album_index_item'
import {requestAlbums} from '../../actions/albums_actions'
class ProfileAlbumIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {pageUser: getState().entities.users[this.props.match.params.userId]}
    }
    
    render(){
        const stateAlbums = getState().entities.albums
        return (
            <ul className="profile-album-index">
                {this.state.pageUser.albums.map(
                    (albumItem, idx) => {
                    let album = stateAlbums[albumItem.id]
                    return <AlbumIndexItem album={album} key={idx} />
                    }
                    )}
            </ul>
            )
    }
}

export default withRouter(ProfileAlbumIndex)