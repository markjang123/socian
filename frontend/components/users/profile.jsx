import React from 'react'

const Profile = (props) => {
    let state = getState()
    debugger
    let user = state.entities.users[props.match.params.userId]
    return <h3>{user.username}'s Profile Page</h3>
}

export default Profile