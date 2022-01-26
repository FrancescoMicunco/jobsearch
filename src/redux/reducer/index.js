import { SET_JOBS } from '../actions'
import { initialState } from '../store'


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS:
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    jobs: []
                }
            }


        default:
            return state
    }
}

export default mainReducer