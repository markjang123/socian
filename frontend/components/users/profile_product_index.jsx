import React from 'react'
import ProductIndexItem from './product_index_item'
class ProfileProductIndex extends React.Component {
    render(){
        let arr = [
            {
                name: "Thank Your Lucky Stars - Black Vinyl LP",
                price: 17,
                category: "Record/Vinyl"
            }, 
            {
                name: "Thank Your Lucky Stars - Black Vinyl LPasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsadfsd",
                price: "$17",
                category: "Record/Vinylasdfasdfasdfasdfasdfasdfasdfasdfs"
            }, 
            {
                name: "Thank Your Lucky Stars - Black Vinyl LP",
                price: "$17",
                category: "Record/Vinyl"
            }, 
            {
                name: "Thank Your Lucky Stars - Black Vinyl LP",
                price: "$17",
                category: "Record/Vinyl"
            }, 
            {
                name: "Thank Your Lucky Stars - Black Vinyl LP",
                price: "$17",
                category: "Record/Vinyl"
            }, 
            {
                name: "Thank Your Lucky Stars - Black Vinyl LP",
                price: "$17",
                category: "Record/Vinyl"
            }, 
            {
                name: "Thank Your Lucky Stars - Black Vinyl LP",
                price: "$17",
                category: "Record/Vinyl"
            }
        ]
        return(
                <ul className="product-index">
                    {this.props.pageUser.products.map(product => <ProductIndexItem product={product}/>)}
                </ul>
        ) 
    }
}

export default ProfileProductIndex