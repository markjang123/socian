import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { requestUser } from '../../actions/user_actions'
import {like, unlike} from '../../util/likes_api_util'
class AlbumLikeButton extends React.Component {
    constructor(props){
        super(props)
        this.likeAlbum = this.likeAlbum.bind(this)
        this.unlikeAlbum = this.unlikeAlbum.bind(this)
    }
    likeAlbum(){
        const {currentUserId, albumId, requestUser} = this.props
        const newLike = {
            like: {
                liker_id: currentUserId,
                likeable_id: albumId, 
                likeable_type: "Album"
            }
        }
        like(newLike)
        .then(() => requestUser(currentUserId))
    }
    unlikeAlbum(){
        const {currentUserId, albumId, likes_given, requestUser} = this.props
        const like = likes_given.find(like => like.liker_id === currentUserId && like.likeable_id === albumId && like.likeable_type === "Album")
        unlike(like.id)
        .then(() => requestUser(currentUserId))
    }
    render() {
        return (
            <div onClick={this.props.liked ? this.unlikeAlbum : this.likeAlbum} className="album-like-button-wrapper">
                <img className="heart-icon" src={this.props.liked ? window.heart_filled : window.heart_empty} />
                <p className="album-like-button-message">{this.props.liked ? "Remove from Wishlist" : "Add to Wishlist"}</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let albumId = parseInt(ownProps.match.params.albumId)
    let currentUser = state.entities.users[state.session.currentUserId]
    return {
        albumId, 
        liked: currentUser.albums_liked.some(album => album.id === albumId),
        likes_given: currentUser.likes_given,
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumLikeButton))