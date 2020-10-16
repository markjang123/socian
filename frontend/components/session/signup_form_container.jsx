import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import SessionForm from './session_form'
import {requestUser} from '../../actions/user_actions'


const mapStateToProps = state => {
    return {
        user: {
            username: "",
            email: "",
            password: "",
            user_type: "",
            location: "",
            description: ""
        },
        currentUserId: state.session.currentUserId,
        formType: "Sign up"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: user => dispatch(signup(user)),
        requestUser: userId => dispatch(requestUser(userId))
    }
}
const signupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default signupFormContainer