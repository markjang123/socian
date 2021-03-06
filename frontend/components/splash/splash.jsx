import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AlbumIndexContainer from '../../components/albums/album_index_container'
import SmallContent from './small-content'
import BigContent from './big_content'
class Splash extends React.Component {
   
    render() {
        return (
            <div className="splash-wrapper">
                <div className="splash-header">
                    <div className="header-content">
                        <BigContent imageUrl={window.big_image} />
                        <SmallContent />
                    </div>
                </div>
                <h3 className="album-index-header">DISCOVER</h3>
                {this.props.filter && <h3 className="album-index-header">genre: {this.props.filter}</h3>}
                <AlbumIndexContainer className="album-index" />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

export default withRouter(connect(mapStateToProps)(Splash))