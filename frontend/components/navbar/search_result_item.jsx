import React from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
class SearchResultItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        debugger
        if (this.props.result.username){
            this.props.history.push(`/users/${this.props.result.id}`)
        }
    }
    render(){
        debugger
        return (
            <div className="search-result-item" onClick={this.handleClick}>
                <div className="result-image">
                    <img onClick={this.handleClick} className="result-image" src={this.props.result.username ? "https://f4.bcbits.com/img/a3210691580_16.jpg" : this.props.result.photoUrl} />
                </div>
                <div className="result-info">
                    <div className="result-title">
                        {this.props.result.title || this.props.result.username} 
                    </div>
                    {this.props.result.artist && <div className="result-artist">by {this.props.result.artist.username}</div>}
                    <div className="result-category">
                        {this.props.result.title ? "ALBUM" : "ARTIST"}
                    </div>
                </div>
            </div>
          
        )
    }
}

export default withRouter(SearchResultItem)