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
                <div className="album-art">
                    <img src={this.props.cover} />
                </div>
                <Link to='/'>{this.props.title}</Link>
                <Link to='/'>{this.props.artist.username}</Link>
            </div>
        )
    }
}

export default AlbumIndexItem