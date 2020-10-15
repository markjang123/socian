import {connect} from 'react-redux';
import {login} from '../../actions/session_actions'
import LoginForm from './login_form'

const mapStateToProps = state => {
    return {
        user: {
            username_or_email: "",
            password: ""
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        attemptLogin: user => dispatch(login(user))
    }
}
const loginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default loginFormContainer