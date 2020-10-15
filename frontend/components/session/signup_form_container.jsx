import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import SessionForm from './session_form'

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
        formType: "Sign up"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: user => dispatch(signup(user))
    }
}
const signupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default signupFormContainer