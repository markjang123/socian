import React from 'react'
class SearchResultItem extends React.Component {
    render(){
        return (
            <div className="search-result-item">
                {this.props.result.title || this.props.result.username} 
            </div>
        )
    }
}

export default SearchResultItem