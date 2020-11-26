import React from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
class SearchResultItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        
        // alert("CLICKED")
        // this.props.history.push('users/2')
        // if (this.props.result.username){
        //     this.props.history.push(`/users/${this.props.result.id}`)
        // }
    }
    render(){
debugger
        return (
            <Link className="search-link" to={this.props.result.username ? `/users/${this.props.result.id}` : `/users/${this.props.result.artist.id}/albums/${this.props.result.id}`}>
            <div className="search-result-item" onClick={this.handleClick}>
                <div className="result-image">
                    <img onClick={this.handleClick} className="result-image" src={this.props.result.username ? this.props.result.profile_image : this.props.result.photoUrl} />
                </div>
                <div className="result-info">
                    <div className="result-title">
                        {this.props.result.title || this.props.result.username} 
                    </div>
                    {this.props.result.artist && <div className="result-artist">by {this.props.result.artist.username}</div>}
                    <div className="result-category">
                        {this.props.result.title ? "ALBUM" : this.props.result.user_type.toUpperCase()}
                    </div>
                </div>
            </div>
            </Link>
          
        )
    }
}

export default withRouter(SearchResultItem)