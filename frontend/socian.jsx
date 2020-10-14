import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './components/session/login_form'

document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("root")
    ReactDOM.render(<LoginForm />, root)
})