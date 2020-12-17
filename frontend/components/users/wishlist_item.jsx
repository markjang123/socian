import React from 'react'
import {Link} from 'react-router-dom'
class WishlistIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Link to={`/users/${this.props.item.artist.id}/albums/${this.props.item.id}`} className="wishlist-index-link">
            <div className="wishlist-index-item">
                <img src={this.props.item.photoUrl} className="wishlist-index-image"/>
                <div className="wishlist-index-info">
                    <p className="wishlist-index-title">{this.props.item.title}</p>
                    <p className="wishlist-index-artist">{this.props.item.artist.username}</p>
                    {/* <p className="wishlist-index-type">{this.props.item.tracks ? "ALBUM" : "TRACK"}</p> */}
                </div>
            </div>
            </Link>
        )
    }
}

export default WishlistIndexItem