import React from 'react'
import Navbar from './navbar/navbar'
import {Route} from 'react-router-dom';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container'

const App = () => {
    return (
        
        <div>
            <NavbarContainer />
            <Route path="/session/new" component={loginFormContainer} />
            <Route path="/users/new" component={signupFormContainer} />
        </div>
    )
}

export default App;