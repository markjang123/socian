import React from 'react'
import {setCurrentTrack, setPlayStatus} from '../../actions/current_track_actions'
import {connect} from 'react-redux'
import ProgressBar from './progress_bar'
class TrackPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying,
            audio: new Audio(this.props.currentTrack.audio_source), 
            currentTime: "0:00", 
            percentDone: 0,
            duration: 100
        }
        this.togglePlay = this.togglePlay.bind(this)
        this.getCurrentTime = this.getCurrentTime.bind(this)
        this.audio = React.createRef()
        this.updateBar = this.updateBar.bind(this)
    }
    componentDidUpdate(){
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
        return this.audio.current === null ? 0 : this.audio.current.currentTime
    }
    renderAudio(){
        return new Audio(this.props.currentTrack.audio_source || "")
    }
    
    updateBar(e) {
        this.setState({
          ["percentDone"]: e.target.value
        });
        this.audio.current.currentTime = Math.floor(this.audio.current.duration * (e.target.value / 100))
      }
    componentDidMount(){
        this.setState({["duration"]: this.audio.current.duration})
       this.timeInterval = setInterval(() => {
           if (!this.audio.current.currentTime){
               this.setState({["currentTime"]: "0:00"})
           } else {
               this.setState({["currentTime"]: this.formatTime(Math.ceil(this.getCurrentTime()))})
           }
        }, 100)
        this.sliderInterval = setInterval(() =>{
            if (!this.audio.current.currentTime) {
                this.setState({["percentDont"]: 0})
            } else {
                this.setState({
                    ["percentDone"]: Math.floor(100 * (this.audio.current.currentTime / this.audio.current.duration))
                })
            }}, 100)
    }
    componentWillUnmount(){
        clearInterval(this.timeInterval)
        clearInterval(this.sliderInterval)
    }
    formatTime(seconds){
        let secDisplay
        seconds % 60 < 10 ? secDisplay = `0${seconds % 60}` : secDisplay = `${seconds % 60}`
        
        return `${Math.floor(seconds / 60)}:` + secDisplay
    }
    render(){
       return <div className="track-player">
           <audio ref={this.audio} src={this.props.currentTrack.audio_source} />
           <div onClick={this.togglePlay} className="big-play-button">{this.renderIcon()}</div>
           <div className="track-interface">
                <div className="track-info">
                        <p className="current-track-info">{this.props.currentTrack.title}</p>
                        <p className="current-track-info current-track-time"> {this.state.currentTime} / {this.props.currentTrack.length}</p>
                </div>
                <input onChange={this.updateBar} id="slider" value={this.state.percentDone} type="range" min="0" max="100" />
           </div>
       </div>
        
    }
}
    const mapStateToProps = state => {
        return {
            currentTrack: state.currentTrack.track,
            isPlaying: state.currentTrack.isPlaying
        }
    }
    const mapDispatchToProps = dispatch => {
        return {
            setCurrentTrack: track => dispatch(setCurrentTrack(track)),
            setPlayStatus: isPlaying => dispatch(setPlayStatus(isPlaying))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer)