import React from 'react'
const ProgressBar = (props) => {
    return <input  id="slider" value={props.percentDone} defaultValue={props.percentDone} type="range" min="0" max="100" />
}
// onMouseUp={(e) => alert(e.currentTarget.value)}
export default ProgressBar