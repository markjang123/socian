import React from 'react'
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    fetchAlbums() {
        $.ajax({
            url: "/api/albums"
        }).then(albums => {
            this.setState({albums})
        })
    }
    componentDidMount(){
        this.fetchAlbums()
    }
   
    render() {
        return (
        <ul className="album-index">
            {this.state.albums ? this.state.albums.map((album, idx) => <AlbumIndexItem artist={album.artist} cover={album.photoUrl} title={album.title} key={idx} />) : null}
        </ul>
        )
    }
}

export default AlbumIndex