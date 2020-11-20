import React from 'react'
class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        debugger
        const {title, artist, photoUrl} = this.props.location.state.album
        return (
        <div className="album-show"> 
        <h3>{title}</h3>
        <h3>{artist.username}</h3>
                <div className="album-cover-container">
                    <img classname="album-cover" src={photoUrl} />
                </div>
                <ul className="track-list">

                </ul>
            </div>
        )
        
    }
}

export default AlbumShow