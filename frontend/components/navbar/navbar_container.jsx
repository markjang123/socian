import {connect} from 'react-redux';
import {requestUser} from '../../actions/user_actions'
import Navbar from './navbar'

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)