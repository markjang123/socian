import React from 'react'
import SearchResultItem from './search_result_item'
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: [], query: ""}
        this.update = this.update.bind(this)
    }
    update(ele){
        debugger
        return e => {
            let newResults = this.state.results
            newResults.push(ele)
            this.setState({results: newResults, query: e.target.value})
        }
    }

    render(){
        return (
            <div className="search-container">
                <input onChange={this.update(1)} type="text" className="searchbar" placeholder="  Search and discover music"/>
                <ul className="search-results">
                    {this.state.results.map((ele, idx) => <SearchResultItem key={idx} />)}
                </ul>
            </div>
        )
    }
}

export default Search