import React from 'react'
import TrackPlayer from '../tracks/track_player'
import TracksIndex from '../tracks/tracks_index'
import {setCurrentTrack, setPlayStatus} from '../../actions/current_track_actions'
class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        if (this.props.album){
            dispatch(setCurrentTrack(this.props.album.tracks[0]))
            dispatch(setPlayStatus(false))
        }
        this.props.requestAlbum(this.props.albumid)
    }
    componentDidUpdate(){
        if (this.props.album){
            dispatch(setCurrentTrack(this.props.album.tracks[0]))
            dispatch(setPlayStatus(false))
        }
    }
    render(){
        if (this.props.album === undefined) {
            return null
        }
        const {title, artist, photoUrl, tracks} = this.props.album
        return (
        <div className="album-show"> 
            <div className="left-column">
                <h3 className="album-title">{title}</h3>
                <h3 className="album-artist">by {artist.username}</h3>
                <TrackPlayer />
                <TracksIndex tracks={tracks}/>
            </div>
            <div className="middle-column">
                <img className="album-cover" src={photoUrl} />
            </div>
            
        </div>
        )
        
    }
}
export default AlbumShow