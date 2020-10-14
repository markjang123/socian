import {combineReducers} from 'react-redux'
import {SessionReducer} from './session_reducer'
import {ErrorsReducer} from '../reducers/errors/errors_reducer'

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer
})

export default RootReducer