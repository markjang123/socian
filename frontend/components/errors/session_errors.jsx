import React from "react";
import SessionForm from "../session/session_form";

class SessionErrors extends React.Component {
    constructor(props){
        super(props)
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