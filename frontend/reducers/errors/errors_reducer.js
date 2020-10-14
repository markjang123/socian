import {combineReducers} from 'react-redux'
import {SessionErrorsReducer} from './session_errors_reducer'

const RootReducer = combineReducers({
    sessionErrors: SessionErrorsReducer
})

export default ErrorsReducer