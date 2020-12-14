import React from 'react'
import FollowingIndexItem from './following_index_item'

class FollowingIndex extends React.Component {
    render() {
        debugger
        let testArr = [1, 2, 3, 4, 5, 6, 7]
        return (
            <ul className="following-index">
                {this.props.pageUser.followees.map((user, idx) => <FollowingIndexItem key={idx} user={user}/>)}
            </ul>
        )
    }
}

export default FollowingIndex