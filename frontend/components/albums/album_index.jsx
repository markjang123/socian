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
        return (
        <ul className="album-index">
            {this.props.albums ? this.props.albums.map((album, idx) => <AlbumIndexItem artist={album.artist} cover={album.photoUrl} title={album.title} key={idx} />) : null}
        </ul>
        )
    }
}

export default AlbumIndex