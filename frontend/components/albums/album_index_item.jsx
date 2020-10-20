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
                <Link className="album-title-link" to='/'>{this.props.title}</Link>
                <Link className="album-artist-link" to='/'>{this.props.artist.username}</Link>
            </div>
        )
    }
}

export default AlbumIndexItem