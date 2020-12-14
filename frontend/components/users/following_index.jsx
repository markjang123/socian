import React from 'react'
import FollowingIndexItem from './following_index_item'

class FollowingIndex extends React.Component {
    render() {
        return (
            <ul className="following-index">
                {this.props.pageUser.followees.map((user, idx) => <FollowingIndexItem key={idx} user={user}/>)}
            </ul>
        )
    }
}

export default FollowingIndex