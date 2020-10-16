import {Route, Redirect} from 'react-router-dom'
const Auth = ({component: Component, path, loggedIn, exact}) => {
    return <Route exact={exact} loggedIn={loggedIn} path={path} render={props => {
        if (loggedIn) {
            return <Redirect to="/" />
        } else {
            return <Component {...props} />
        }
    }}/>
} // renders component if logged out, else redirect to root

const Protected = ({component: Component, path, loggedIn, exact}) => {
    return <Route path={path} loggedIn={loggedIn} exact={exact} render={props => {
        if (loggedIn) {
            return <Component {...props} />
        } else {
            return <Redirect to="/session/new" />
        }
    }}/>
} // renders component if logged in, else redirect to login

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}