import React from 'react'
import SearchResultItem from './search_result_item'
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: [], query: ""}
        this.update = this.update.bind(this)
        this.filterSearches = this.filterSearches.bind(this)
        debugger
    }
    
    update(field){
        return e => {
            debugger
            let newResults = this.filterSearches(e.currentTarget.value)
            debugger
            this.setState({[field]: newResults})
        }
    }
    componentDidMount(){
        debugger
        this.props.requestAllSearches()
    }
    filterSearches(query){
        debugger
        if (!query) return []
        return this.props.allSearches.filter(obj => {
            let test
            obj.hasOwnProperty("username") ? test = obj.username : test = obj.title
            return test.includes(query)
        })
    }
    render(){
        debugger
        return (
            <div className="search-container">
                <input onChange={this.update("results")}  type="text" className="searchbar" placeholder="  Search and discover music"/>
                <ul className="search-results">
                    {this.state.results.map((result, idx) => <SearchResultItem key={idx} result={result} />)}
                </ul>
            </div>
        )
    }
}

export default Search