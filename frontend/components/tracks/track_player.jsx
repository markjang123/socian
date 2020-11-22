import React from 'react'
import {connect} from 'react-redux'
class TrackPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {currentTrack: this.props.currentTrack.track}
    }
    render(){
       return <div className="track-player">
           <h3>{this.state.currentTrack.title}</h3>
           <audio controls src="https://t4.bcbits.com/stream/911239cb6daca8f3054f46be7a8fd32a/mp3-128/3541840780?p=0&ts=1605962539&t=14c4a4c4a9f80816a48812b500e4faf9f36c5a27&token=1605962539_21ff665dd9c237f4eddfe9cc6a3502e06c8eee53">

           </audio>
       </div>
        
    }
}
    const mapStateToProps = state => {
        return {
            currentTrack: state.currentTrack
        }
    }

export default connect(mapStateToProps)(TrackPlayer)