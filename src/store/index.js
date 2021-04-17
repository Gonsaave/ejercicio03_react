import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import pokedexReducer from './pokedex'

const rootReducer = combineReducers({
    pokedex: pokedexReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store