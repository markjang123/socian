import React from 'react'
import {setCurrentTrack, setPlayStatus} from '../../actions/current_track_actions'
import {connect} from 'react-redux'
class TrackPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying,
            audio: new Audio(this.props.currentTrack.audio_source), 
            currentTime: "0:00"
        }
        this.togglePlay = this.togglePlay.bind(this)
        this.getCurrentTime = this.getCurrentTime.bind(this)
        this.audio = React.createRef()
    }
    componentDidUpdate(){
        debugger
        // this.audio = new Audio(this.props.currentTrack.audio_source)
        if (!this.props.isPlaying){
            this.audio.current.pause()
        } else {
            this.audio.current.play()
        }
    }
    togglePlay(){
       this.props.setPlayStatus(!this.props.isPlaying)
    }
    renderIcon(){
        if (this.props.isPlaying){
            return <img className="big-play-button-icon" src="http://simpleicon.com/wp-content/uploads/pause.png" />
        } else {
            return <img className="big-play-button-icon" src="http://simpleicon.com/wp-content/uploads/play1.png" />
        }
    }
    getCurrentTime(){
        debugger
        return this.audio.current === null ? "" : this.audio.current.currentTime
    }
    renderAudio(){
        return new Audio(this.props.currentTrack.audio_source || "")
    }
    updateTime(){
        debugger
        setInterval(console.log(this.getCurrentTime()), 1000)
    }
    componentDidMount(){
        debugger
        // this.updateTime()
        setInterval(() => {
            console.log(Math.ceil(this.getCurrentTime()))
            this.setState({["currentTime"]: this.formatTime(Math.ceil(this.getCurrentTime()))})
        }, 1000)
    }
    formatTime(seconds){
        let secDisplay
        seconds % 60 < 10 ? secDisplay = `0${seconds % 60}` : secDisplay = `${seconds % 60}`
        
        return `${Math.floor(seconds / 60)}:` + secDisplay
    }
    render(){
        debugger
       return <div className="track-player">
           <audio ref={this.audio} src={this.props.currentTrack.audio_source} />
           <div onClick={this.togglePlay} className="big-play-button">{this.renderIcon()}</div>
           <div className="track-interface">
                <div className="track-info">
                        <p className="current-track-info">{this.props.currentTrack.title}</p>
                        <p className="current-track-info current-track-time"> {this.state.currentTime} / {this.props.currentTrack.length}</p>
                </div>
                <input onMouseUp={(e) => alert(e.currentTarget.value)} id="slider" type="range" min="1" max="100" />
           </div>
       </div>
        
    }
}
    const mapStateToProps = state => {
        debugger
        return {
            currentTrack: state.currentTrack.track,
            isPlaying: state.currentTrack.isPlaying
        }
    }
    const mapDispatchToProps = dispatch => {
        debugger
        return {
            setCurrentTrack: track => dispatch(setCurrentTrack(track)),
            setPlayStatus: isPlaying => dispatch(setPlayStatus(isPlaying))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer)