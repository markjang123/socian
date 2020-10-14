import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import Navbar from './navbar'

mapStateToProps = state => {
    return {
        currentUserId: state.session.currentUserId
    }
}

mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}