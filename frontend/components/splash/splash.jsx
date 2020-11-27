import React from 'react'
import {withRouter} from 'react-router-dom'
import AlbumIndexContainer from '../../components/albums/album_index_container'
import SmallContent from './small-content'
import BigContent from './big_content'
class Splash extends React.Component {
    componentWillUnmount(){
        console.log(this.props)
    }
    
    // componentDidMount() {
    //     if (this.props.history.action === "POP" && this.props.location.pathname !== prevProps.location.pathname) {
    //         // this.props.history.go(0)
    //         alert("BACK")
    //     }
    // }
    render() {
        debugger
        return (
            <div>
                <div className="splash-header">
                    <div className="header-content">
                        <BigContent imageUrl="https://kerokerobonito.com/kerokero4%20(1).jpg" />
                        <SmallContent />
                    </div>
                </div>
                <h3 className="album-index-header">DISCOVER</h3>
                <AlbumIndexContainer className="album-index" />

            </div>
        )
    }
}

export default withRouter(Splash)