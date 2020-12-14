import React from 'react'
import TracksIndexItemContainer from './tracks_index_item_container'
class TracksIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
      return (<ol className="track-list">
                    {this.props.tracks.map(track => <TracksIndexItemContainer key={track.id} track={track}/>)}
            </ol>
      )
        
    }
}

export default TracksIndex