import React from "react";
import SessionForm from "../session/session_form";
import {clearSessionErrors} from '../../actions/session_actions'

class SessionErrors extends React.Component {
    constructor(props){
        super(props)
    } 
    componentWillUnmount(){
            dispatch(clearSessionErrors())
    }
    render() {
        let state = getState()
        return (
            <p>
                {state.errors.sessionErrors}
            </p>
        )
    }
}



export default SessionErrors