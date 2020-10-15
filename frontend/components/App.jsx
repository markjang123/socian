import React from 'react'
import Navbar from './navbar/navbar'
import {Route} from 'react-router-dom';
import loginFormContainer from './session/login_form_container';

const App = () => {
    return (
        
        <div>
            <Navbar />
            <Route path="/session/new" component={loginFormContainer} />
            {/* <Route path="/users/new" component={formContainer} /> */}
        </div>
    )
}

export default App;