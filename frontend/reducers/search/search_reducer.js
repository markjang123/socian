import {RECEIVE_ALL_SEARCHES} from "../../actions/search_actions"

const SearchReducer = (oldState = [], action) => {
    Object.freeze(oldState)

    switch(action.type){
        case RECEIVE_ALL_SEARCHES:
            return action.searches
        default: 
            return oldState
    }
}

export default SearchReducer