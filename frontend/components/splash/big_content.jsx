import React from 'react'

class BigContent extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
        <div className="big-content">
             <img className="big-content-image" src={this.props.imageUrl}/>
             <div className="big-content-details">
                <div className="big-content-title">Kero Kero Bonito</div>
                <div className="big-content-subtitle">When I hear that alarm clock ring (wake up!)
That's my cue to enter
I've finished counting my 40 winks (all done!)
And then I remember
There's so much stuff to do
Right now I just wanna snooze because
Waking up is the hardest part (uh-huh)
But then, it's essential</div>
                <button className="link-button">listen now</button>
             </div>
        </div>

        )
    }
}

export default BigContent