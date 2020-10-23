import React from 'react'
import {Link} from 'react-router-dom'
class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className="album-index-item">
                <div className="album-art-container">
                    <img className="album-art" src={this.props.cover} />
                </div>
                <Link className="album-title-link" to='/users/4/albums/4'>{this.props.title}</Link>
                {this.props.artist && <Link className="album-artist-link" to={`/users/${this.props.artist.id}`}>{this.props.artist.username}</Link>}
            </div>
        )
    }
}

export default AlbumIndexItem