import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import App from './App'
import LoginForm from './session/login_form'
import SignupForm from './session/signup_form'

const Root = ({store}) => {
    return (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    )
}

export default Root