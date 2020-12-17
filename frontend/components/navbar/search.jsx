import React from 'react'
import SearchResultItem from './search_result_item'
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: [], query: ""}
        this.update = this.update.bind(this)
        this.filterSearches = this.filterSearches.bind(this)
        this.showGenreList = this.showGenreList.bind(this)
        this.hideGenreList = this.hideGenreList.bind(this)
        this.filterGenre = this.filterGenre.bind(this)
        this.clearText = this.clearText.bind(this)
        this.searchBar = React.createRef()
        this.genreList = React.createRef()
    }
    
    update(field){
        return e => {
            this.hideGenreList()
            let newResults = this.filterSearches(e.currentTarget.value)
            this.setState({[field]: newResults})
        }
    }
    componentDidMount(){
        this.props.requestAllSearches()
    }
    componentDidUpdate(prevProps){
        if (this.props.location.pathname !== prevProps.location.pathname){
            this.searchBar.current.value = ""
        }
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
            // e.currentTarget.value = ""
            this.setState({results: []})
        }, 150)
    }
    showGenreList(){
        if (this.props.location.pathname === "/"){
            this.genreList.current.style.display = "block"
        }
    }
    hideGenreList(){
        setTimeout(() => {
            this.genreList.current.style.display = "none"
        }, 250)
        
    }
    filterGenre(e){
        if (e.target.innerText === "all"){
            this.props.filterAlbums("")
        } else {
            this.props.filterAlbums(e.target.innerText)
        }
    }
    render(){
        
        return (
            <div className="search-container" onBlur={this.clearText}>
                <input ref={this.searchBar} onBlur={this.hideGenreList} onFocus={this.showGenreList} onChange={this.update("results")}  type="text" className="searchbar" placeholder="Search and discover music"/>
                <ul className="search-results">
                    {this.state.results.map((result, idx) => <SearchResultItem key={idx} result={result} />)}
                </ul>
                <div ref={this.genreList} className="genre-list-wrapper">
                    <ul className="genre-list">
                        {this.props.genres.map((genre, idx) => <div className="genre-wrapper"><div onClick={this.filterGenre} className="genre" id={`genre-${idx + 1}`}><p className="genre-text">{genre}</p></div></div>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search