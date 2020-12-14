import React from 'react'
import ProductIndexItem from './product_index_item'
class ProfileProductIndex extends React.Component {
    render(){
        debugger
        return(
                <ul className="product-index">
                    {this.props.pageUser.products.map(product => <ProductIndexItem product={product}/>)}
                </ul>
        ) 
    }
}

export default ProfileProductIndex