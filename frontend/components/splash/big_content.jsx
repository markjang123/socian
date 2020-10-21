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
                <div className="big-content-subtitle"></div>
             </div>
        </div>

        )
    }
}

export default BigContent