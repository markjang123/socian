import {connect} from 'react-redux';
import {requestAllSearches} from '../../actions/search_actions'
import {withRouter} from 'react-router-dom'
import Search from './search'

const mapStateToProps = state => {
    debugger
    return {
        allSearches: state.search
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        requestAllSearches: () => dispatch(requestAllSearches())
    }
}
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default withRouter(SearchContainer)