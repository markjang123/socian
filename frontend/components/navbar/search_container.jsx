import {connect} from 'react-redux';
import {requestAllSearches} from '../../actions/search_actions'
import {withRouter} from 'react-router-dom'
import Search from './search'

const mapStateToProps = state => {
    return {
        allSearches: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAllSearches: () => dispatch(requestAllSearches())
    }
}
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default withRouter(SearchContainer)