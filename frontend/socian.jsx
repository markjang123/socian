import ReactDOM from 'react-dom'
import React from 'react'
import Root from './components/root'
import configureStore from './store/store'
import {RECEIVE_CURRENT_USER_ID} from './actions/session_actions'

document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("root")
    const store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.RECEIVE_CURRENT_USER_ID = RECEIVE_CURRENT_USER_ID
    ReactDOM.render(<Root store={store} />, root)
})