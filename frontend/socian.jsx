import ReactDOM from 'react-dom'
import React from 'react'
import Root from './components/root'
import configureStore from './store/store'
import {requestUser} from './actions/user_actions'
import {clearSessionErrors} from './actions/session_actions'


document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("root")
    const store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.requestUser = requestUser
    window.clearSessionErrors = clearSessionErrors
    ReactDOM.render(<Root store={store} />, root)
})