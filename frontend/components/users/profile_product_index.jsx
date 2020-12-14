import React from 'react'
import ProductIndexItem from './product_index_item'
class ProfileProductIndex extends React.Component {
    render(){
        return(
                <ul className="product-index">
                    {this.props.pageUser.products.map(product => <ProductIndexItem key={product.id} product={product}/>)}
                </ul>
        ) 
    }
}

export default ProfileProductIndex