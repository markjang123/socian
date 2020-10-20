import {connect} from 'react-redux';
import AlbumIndexItem from './album_index_item'

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