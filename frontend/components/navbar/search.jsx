import React from 'react'
import SearchResultItem from './search_result_item'
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: [], query: ""}
        this.update = this.update.bind(this)
        this.filterSearches = this.filterSearches.bind(this)
        this.clearText = this.clearText.bind(this)
        debugger
    }
    
    update(field){
        return e => {
            let newResults = this.filterSearches(e.currentTarget.value)
            debugger
            this.setState({[field]: newResults})
        }
    }
    componentDidMount(){
        this.props.requestAllSearches()
    }
    filterSearches(query){
        if (!query) return []
        let regex = new RegExp(query, 'i')
        let filtered = this.props.allSearches.filter(obj => {
            let test
            obj.hasOwnProperty("username") ? test = obj.username : test = obj.title
            return regex.test(test)
        })
        return filtered.slice(0, 5)
    }
    clearText(e){
        setTimeout(() => {
            e.currentTarget.value = ""
            this.setState({results: []})
        }, 150)
    }
    render(){
        return (
            <div className="search-container" onBlur={this.clearText}>
                <input  onChange={this.update("results")}  type="text" className="searchbar" placeholder="Search and discover music"/>
                <ul className="search-results">
                    {this.state.results.map((result, idx) => <SearchResultItem key={idx} result={result} />)}
                </ul>
            </div>
        )
    }
}

export default Search