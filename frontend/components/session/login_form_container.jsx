import {connect} from 'react-redux';
import {login} from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = state => {
    return {
        user: {
            username_or_email: "",
            password: ""
        },
        formType: "Log in"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: user => dispatch(login(user))
    }
}
const loginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default loginFormContainer