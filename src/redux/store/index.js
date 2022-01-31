import { createStore, compose, applyMiddleware } from 'redux'
import mainReducer from '../reducer'
import thunk from 'redux-thunk'


const composeThatWorks = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose


export const initialState = {

    jobs: {
        jobs: []
    },
}

let configureStore = createStore(
    mainReducer,
    initialState,
    composeThatWorks(applyMiddleware(thunk))
)

export default configureStore