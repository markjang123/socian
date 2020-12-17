import React from 'react'
import WishlistIndexItem from './wishlist_item'

class WishlistIndex extends React.Component {
    render() {
        return (
            <ul className="following-index">
                {this.props.pageUser.albums_liked.map((item, idx) => <WishlistIndexItem key={idx} item={item}/>)}
            </ul>
        )
    }
}

export default WishlistIndex