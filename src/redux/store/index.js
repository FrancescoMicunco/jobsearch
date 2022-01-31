import { createStore, compose, applyMiddleware } from 'redux'
import mainReducer from '../reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeThatWorks = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose


export const initialState = {

    jobs: {
        jobs: []
    },
}


const persistConfig = {
    key: 'root',
    storage

}

const persistedReducer = persistReducer(persistConfig, mainReducer)



export let configureStore = createStore(
    persistedReducer,
    initialState,
    composeThatWorks(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)