import { GET_JOBS, GET_ERROR } from '../actions'
import { initialState } from '../store'


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload
            }
        case GET_ERROR:
            return {
                ...state,
                errorCode: action.payload,
            }

        default:
            return state
    }
}

export default mainReducer