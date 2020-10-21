import React from 'react'
import AlbumIndexContainer from '../../components/albums/album_index_container'
import SmallContent from './small-content'
import BigContent from './big_content'
class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-header">
                    <div className="header-content">
                        <BigContent imageUrl="https://kerokerobonito.com/kerokero4%20(1).jpg" />
                        <SmallContent />
                    </div>
                </div>
                <h3 className="album-index-header">DISCOVER</h3>
                <AlbumIndexContainer className="album-index" />

            </div>
        )
    }
}

export default Splash