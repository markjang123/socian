import React from "react";
import SessionForm from "../session/session_form";

const SessionErrors = (props) => {
    let state = getState()
    return (
        <p>
            {state.errors.sessionErrors}
        </p>
    )
}

export default SessionErrors