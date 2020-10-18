import React from 'react'
import {Route, Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container'
import ProfileContainer from './users/profile_container'
import Splash from './splash/splash'
import Error404 from './errors/error_404'
import {AuthRoute, ProtectedRoute} from '../util/routes_util'

const App = () => {
    return ( 
        <div>
            <NavbarContainer />
            <Switch>
                <AuthRoute exact path="/session/new" component={LoginFormContainer} />
                <AuthRoute exact path="/users/new" component={SignupFormContainer} />
                <Route path="/users/:userId" component={ProfileContainer} />
                <Route exact path="/" component={Splash} />
                <Route component={Error404} />
            </Switch>
        </div>
    )
}

export default App;