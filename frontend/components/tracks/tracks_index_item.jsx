import React from 'react'
import {like, unlike} from '../../util/likes_api_util'
class TracksIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.likeTrack = this.likeTrack.bind(this)
        this.unlikeTrack = this.unlikeTrack.bind(this)
    }
    handleClick(){
        if (this.props.currentTrack.id === this.props.track.id) {
            this.props.setPlayStatus(!this.props.isPlaying)
        } else {
            this.props.setCurrentTrack(this.props.track)
            this.props.setPlayStatus(true)
        }

    }
    likeTrack(){
        const {currentUserId, track, requestUser} = this.props
        const newLike = {
            like: {
                liker_id: currentUserId,
                likeable_id: track.id, 
                likeable_type: "Track"
            }
        }
        like(newLike)
        .then(() => requestUser(currentUserId))
    }
    unlikeTrack(){
        const {currentUserId, track, likes_given, requestUser} = this.props
        const like = likes_given.find(like => like.liker_id === currentUserId && like.likeable_id === track.id && like.likeable_type === "Track")
        unlike(like.id)
        .then(() => requestUser(currentUserId))
    }
    renderIcon(){
        if (this.props.isPlaying && this.props.currentTrack.id === this.props.track.id){
            return <img className="play-button-icon" src={window.pause} />
        } else {
            return <img className="play-button-icon" src={window.play} />
        }
    }
    render(){
      return (
        <div className="tracks-index-item-container">
            <div onClick={this.handleClick} className="play-button">{this.renderIcon()}</div>
            <li className="track-title-li">
                <p className="track-title" >{this.props.track.title}</p>
            </li>
                <p className="track-length">{this.props.track.length}</p>
                <img onClick={this.props.liked ? this.unlikeTrack : this.likeTrack} className="track-heart-icon" src={this.props.liked ? "https://www.flaticon.com/svg/static/icons/svg/833/833558.svg" : "https://www.flaticon.com/svg/static/icons/svg/872/872229.svg"} />
        </div>
      )
        
    }
}

export default TracksIndexItem