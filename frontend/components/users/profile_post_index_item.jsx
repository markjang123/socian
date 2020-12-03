import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ProfilePostIndexItem extends React.Component {
    constructor(props){
        super(props)
        // this.state = {body: this.props.body}
    }
    render(){
        debugger
        const {body, post_type, date, album_id} = this.props.post
        let album = this.props.albums[album_id]
        return (<div className="profile-post">
                <div className="post-header">
                    <span className="post-type">
                        {post_type} from {this.props.pageUser.username}
                    </span>
                    <span className="post-date">
                        {date}
                    </span>
                </div>
                <img className="post-image" src={album ? album.photoUrl : ""}></img>
                <Link className="post-link" to={`/users/${this.props.pageUser.id}/albums/${album_id}`} >            
                        <p className="post-link-text post-link-title">{album ? album.title : ""}</p><br/>
                        <p className="post-link-text post-link-artist">by {album ? album.artist.username : ""}</p>    
                </Link>
                {/* <p>{album ? album.title : ""}</p>
                <p>by {album ? album.artist.username : ""}</p> */}
                </div>
                )
    }
}
const mapStateToProps = state => {
    return {
        albums: state.entities.albums.user
    }
}

export default connect(mapStateToProps)(ProfilePostIndexItem)