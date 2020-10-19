import {connect} from 'react-redux';
import AlbumIndexItem from './index_item'

const mapStateToProps = state => {
    return {
        user: {
            username_or_email: "",
            password: ""
        },
        currentUserId: "hi",
        formType: "Log in"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: dispatch()
    }
}
const AlbumIndexItemContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumIndexItem)
export default AlbumIndexItemContainer