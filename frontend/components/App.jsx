import React from 'react'
import {Route} from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container'
import Profile from './users/profile'

const App = () => {
    return (
        
        <div>
            <Route path="/" component={NavbarContainer} />
            <Route path="/session/new" component={loginFormContainer} />
            <Route path="/users/new" component={signupFormContainer} />
            <Route path="/users/:userId" component={Profile} />
        </div>
    )
}

export default App;