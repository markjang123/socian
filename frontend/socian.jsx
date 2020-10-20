import ReactDOM from 'react-dom'
import React from 'react'
import Root from './components/root'
import configureStore from './store/store'
import {requestUser} from './actions/user_actions'
import {login} from './actions/session_actions'
import {requestAlbums} from './actions/albums_actions'


document.addEventListener("DOMContentLoaded",() => {
    const root = document.getElementById("root")
    let store;
    if (window.currentUser){
        const {currentUser} = window;
        const {id} = currentUser;
        const preloadedState = {
            entities:{
                users: {
                    [id]: currentUser
                } 

            },
            errors: {
                sessionErrors: []
            },
            session: {
                currentUserId: id
            }
        }
        store = configureStore(preloadedState)
    } else {
        store = configureStore();
    }
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.requestUser = requestUser
    window.requestAlbums = requestAlbums
    window.login = login
    ReactDOM.render(<Root store={store} />, root)
})