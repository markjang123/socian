import {RECEIVE_ALL_SEARCHES} from "../../actions/search_actions"

const SearchReducer = (oldState = {results: [], genres: []}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_ALL_SEARCHES:
            nextState["results"] = action.searches
            for(const item of action.searches){
                if (item.genre && !nextState.genres.includes(item.genre)){
                    nextState.genres.push(item.genre)
                }
            }
            return nextState
        default: 
            return oldState
    }
}

export default SearchReducer