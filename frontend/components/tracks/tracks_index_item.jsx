import React from 'react'
class TracksIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        if (this.props.currentTrack.id === this.props.track.id) {
            this.props.setPlayStatus(!this.props.isPlaying)
        } else {
            this.props.setCurrentTrack(this.props.track)
            this.props.setPlayStatus(true)
        }

    }
    renderIcon(){
        if (this.props.isPlaying && this.props.currentTrack.id === this.props.track.id){
            return <img className="play-button-icon" src="http://simpleicon.com/wp-content/uploads/pause.png" />
        } else {
            return <img className="play-button-icon" src="http://simpleicon.com/wp-content/uploads/play1.png" />
        }
    }
    render(){
      return (
        <div className="tracks-index-item-container">
            <div onClick={this.handleClick} className="play-button">{this.renderIcon()}</div>
            <li className="track-title-li">
                <p className="track-title" >{this.props.track.title}</p>
            </li>
                <p className="track-length">{this.props.track.length}</p>
        </div>
      )
        
    }
}

export default TracksIndexItem