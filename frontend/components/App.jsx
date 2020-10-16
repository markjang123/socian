import React from 'react'
import {Route, Switch} from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container'
import Profile from './users/profile'
import Splash from './splash/splash'
import Error404 from './errors/error_404'
import {AuthRoute, ProtectedRoute} from '../util/routes_util'

const App = () => {
    return (
        
        <div>
            <NavbarContainer />
            <Switch>
                <Route exact path="/session/new" component={loginFormContainer} />
                <Route exact path="/users/new" component={signupFormContainer} />
                <Route path="/users/:userId" component={Profile} />
                <Route exact path="/" component={Splash} />
                <Route component={Error404} />
            </Switch>
        </div>
    )
}

export default App;