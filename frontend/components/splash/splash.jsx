import React from 'react'
import NavbarContainer from '../navbar/navbar_container'
import AlbumIndexContainer from '../../components/albums/album_index_container'
class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-header">
                </div>
                <AlbumIndexContainer className="album-index" />

            </div>
        )
    }
}

export default Splash