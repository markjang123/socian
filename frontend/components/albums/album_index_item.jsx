import React from 'react'
import {Link} from 'react-router-dom'
class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        debugger
        return (
            <div className="album-index-item">
                <Link className="album-title-link" to={{
                    pathname:`/users/${this.props.album.artist.id}/albums/${this.props.album.id}`,
                    state: {album: this.props.album},
                 }}>
                    <div className="album-art-container">
                        <img className="album-art" src={this.props.album.photoUrl} />
                    </div>
                </Link>
                <Link className="album-title-link" to={{
                    pathname:`/users/${this.props.album.artist.id}/albums/${this.props.album.id}`,
                    state: {album: this.props.album},
                 }}>
                    {this.props.album.title}
                </Link>
                {this.props.album.artist && <Link className="album-artist-link" to={`/users/${this.props.album.artist.id}`}>{this.props.album.artist.username}</Link>}
            </div>
        )
    }
}

export default AlbumIndexItem