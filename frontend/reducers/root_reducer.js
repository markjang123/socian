import {combineReducers} from 'redux'
import SessionReducer from './session_reducer'
import ErrorsReducer from '../reducers/errors/errors_reducer'
import EntitiesReducer from '../reducers/entities/entities_reducer'
import SearchReducer from '../reducers/search/search_reducer'
import CurrentTrackReducer from './current_track/current_track_reducer'

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    search: SearchReducer,
    currentTrack: CurrentTrackReducer
})

export default RootReducer