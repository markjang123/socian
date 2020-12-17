import {RECEIVE_FILTER} from "../../actions/albums_actions"

const FilterReducer = (oldState = "", action) => {
    let nextState = oldState.slice()
    switch(action.type){
        case RECEIVE_FILTER:
            return action.filter
        default: 
            return oldState
    }
}

export default FilterReducer