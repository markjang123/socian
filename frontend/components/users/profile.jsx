import React from 'react'

const Profile = (props) => {
    let state = getState()
    let user = state.entities.users[state.session.currentUserId]
    // return <h2>{user.username}'s Profile Page</h2>
    return null
}

export default Profile