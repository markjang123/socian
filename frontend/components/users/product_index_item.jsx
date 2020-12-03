import React from 'react'

class ProductIndexItem extends React.Component {
    render(){
        debugger
        return(
            <div className="product-index-item">
                <img className="product-image" src={this.props.product.product_image_url}></img>
                <p className="product-info product-name">{this.props.product.name}</p>
                <p className="product-info product-category">{this.props.product.category}</p>
                <span className="product-info product-price">${this.props.product.price}</span>
                <span className="product-info product-currency">USD</span>
            </div>
        ) 
    }
}

export default ProductIndexItem