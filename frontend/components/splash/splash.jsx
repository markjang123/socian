import React from 'react'
import NavbarContainer from '../navbar/navbar_container'
import AlbumIndex from '../albums/album_index'
class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-header">
                </div>
                <AlbumIndex className="album-index" />

            </div>
        )
    }
}

export default Splash