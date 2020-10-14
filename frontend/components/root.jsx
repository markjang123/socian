import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import App from './App'
import LoginForm from './session/login_form'

const Root = ({store}) => {
    return (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={App} />
            <Route path="/session/new" component={LoginForm} />
        </HashRouter>
    </Provider>
    )
}

export default Root