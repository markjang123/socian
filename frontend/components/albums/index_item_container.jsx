import {connect} from 'react-redux';
import AlbumIndexItem from './index_item'

const mapStateToProps = state => {
    return {
        yes: "yes"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: "yes"
    }
}
const AlbumIndexItemContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumIndexItem)
export default AlbumIndexItemContainer