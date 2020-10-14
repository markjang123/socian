import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './components/session/login_form'
import configureStore from './store/store'
const store = configureStore();
window.dispatch = store.dispatch;
window.getState = store.getState;

document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("root")
    ReactDOM.render(<LoginForm store={store}/>, root)
})