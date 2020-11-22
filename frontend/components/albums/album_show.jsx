import React from 'react'
import TrackPlayer from '../tracks/track_player'
class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        debugger
        const {title, artist, photoUrl, tracks} = this.props.album
        return (
        <div className="album-show"> 
            <div className="left-column">
                <h3 className="album-title">{title}</h3>
                <h3 className="album-artist">by {artist.username}</h3>
                <TrackPlayer />
                <ol className="track-list">
                    {tracks.map(track => <li>{track.title}</li>)}
                </ol>
            </div>
            <div className="middle-column">
                <img className="album-cover" src={photoUrl} />
            </div>
            
        </div>
        )
        
    }
}
{/* <iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=3456317936/size=large/bgcol=333333/linkcol=e32c14/transparent=true/" seamless><a href="https://kerokerobonito.bandcamp.com/album/bonito-generation">Bonito Generation by Kero Kero Bonito</a></iframe> */}
export default AlbumShow