import React from 'react';

class SmallContentItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="small-content-item">
                <img className="small-item-image" src={this.props.imageUrl}/>
                <div className="small-item-details">
                    <div className="small-item-title">{this.props.title}</div>
                    <div className="small-item-subtitle">{this.props.subtitle}</div>
                </div>
            </div>
        )
    }
}

export default SmallContentItem;