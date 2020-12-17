import {connect} from 'react-redux';
import {requestAllSearches} from '../../actions/search_actions'
import {filterAlbums} from '../../actions/albums_actions'
import {withRouter} from 'react-router-dom'
import Search from './search'

const mapStateToProps = state => {
    let genres = state.search.genres
    if (!genres.includes("all")) genres.push("all")
    return {
        allSearches: state.search.results,
        genres: genres
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAllSearches: () => dispatch(requestAllSearches()),
        filterAlbums: genre => dispatch(filterAlbums(genre))
    }
}
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default withRouter(SearchContainer)