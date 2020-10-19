import React from 'react'
import AlbumIndexItem from './index_item'

class AlbumIndex extends React.Component {
    render() {
        const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        return (
        <ul className="album-index">
            {testArr.map((album, idx) => <AlbumIndexItem key={idx} />)}
        </ul>
        )
    }
}

export default AlbumIndex