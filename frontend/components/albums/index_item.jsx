import React from 'react'
import Link from 'react-router-dom'
class AlbumIndexItem extends React.Component {
    render(){
        return (
            <div className="album-index-item">
                <div className="album-art">
                    ALBUM ART
                </div>
                <Link to='/'>Album name</Link>
                <Link to='/'>Artist name</Link>
            </div>
        )
    }
}

export default AlbumIndexItem