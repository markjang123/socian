import React from 'react'
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
 
    componentDidMount(){
        this.props.requestAlbums()
    }
   
    render() {
        let displayedAlbums
        if (this.props.filter){
            displayedAlbums = this.props.albums.filter(album => album.genre === this.props.filter)
        } else {
            displayedAlbums = this.props.albums
        }
        return (
        <ul className="album-index">
            {displayedAlbums ? displayedAlbums.map((album, idx) => {
            return <AlbumIndexItem album={album} key={idx} />
            }) : null}
        </ul>
        )
    }
}

export default AlbumIndex