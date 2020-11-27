import React from 'react'
import {withRouter} from 'react-router-dom'
class BigContent extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.history.push("users/2/albums/11")
    }
    render(){
        return (
        <div className="big-content" onClick={this.handleClick}>
             <img className="big-content-image" src={this.props.imageUrl}/>
             <div className="big-content-details">
                <div className="big-content-title">Kero Kero Bonito</div>
                <div className="big-content-subtitle">
                From their inception, KKB has always been focused on creating a dream vision of pop music — acknowledging its deep history while challenging the status quo. While they’ve explored nostalgic rock, kitsch pop and psychedelic experimentalism, their trademarks — subversion, idealism, craftsmanship — are ever-present on Civilization I.        
                </div>
                <button className="link-button">listen now</button>
             </div>
        </div>
        )
    }
}

export default withRouter(BigContent)