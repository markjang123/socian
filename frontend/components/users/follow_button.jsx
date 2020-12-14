import React from 'react'
import {withRouter} from 'react-router-dom'
import {follow, unfollow, fetchAllFollows} from '../../util/follows_api_util'
class FollowButton extends React.Component {
    constructor(props){
        super(props)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleMouseEnter(e){
        if (e.currentTarget.innerText === "Following"){
            e.currentTarget.innerText = "Unfollow"           
        } 
    }
    handleMouseLeave(e){
        if (e.currentTarget.innerText === "Unfollow"){
            e.currentTarget.innerText = "Following"           
        } 
    }
    handleClick(){
        if (this.props.currentUserId === null){
            this.props.history.push('/session/new')
        }
        if (this.isFollowing()){
            fetchAllFollows()
            .then(response => {
                let followToBeDeleted = response.find(follow => follow.follower_id === this.props.currentUserId && follow.followee_id === this.props.pageUser.id)
                if (followToBeDeleted){
                    unfollow(followToBeDeleted.id)
                    .then(() => this.props.requestUser(this.props.pageUser.id))
                } else {
                    alert("NO FOLLOW FOUND")
                }
            })
        } else {
            follow({
                follower_id: this.props.currentUserId,
                followee_id: this.props.pageUser.id
            })
            .then(() => this.props.requestUser(this.props.pageUser.id))
        }
        //create/delete follow
        //refetch user
    }
    isFollowing(){
        let user = this.props.pageUser.followers.find(user => user.id === this.props.currentUserId)
        return !!user
    }
    render(){
        return (
            <button onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={this.isFollowing() ? "unfollow-button" : "follow-button"}>{this.isFollowing() ? "Following" : "Follow"}</button>
        )
    }
}

export default withRouter(FollowButton)