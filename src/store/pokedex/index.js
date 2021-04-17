import pokedexBase from './base.json'
const initialState = {
    getAll: [],
    get: {
        "id": '',
        "name": {
          "english": '',
          "japanese": '',
          "chinese": '',
          "french": ''
        },
        "type": [
          '',
          ''
        ],
        "base": {
          "HP": '',
          "Attack": '',
          "Defense": '',
          "Sp. Attack": '',
          "Sp. Defense": '',
          "Speed": ''
        }
      },
}

export const POKEDEX_GET_ALL = 'POKEDEX_GET_ALL'
export const POKEDEX_GET = 'POKEDEX_GET'
export const POKEDEX_VIEWED = 'POKEDEX_VIEWED'
export const POKEDEX_NOT_VIEWED = 'POKEDEX_NOT_VIEWED'
export const POKEDEX_ADD = 'POKEDEX_ADD'
export const POKEDEX_DELETE = 'POKEDEX_DELETE'

const pokedexReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POKEDEX_GET_ALL:
            return {
                getAll: pokedexBase.pokemons.map(p => ({ ...p, viewed: false })),
                get: prevState.pokedex
            }
        case POKEDEX_GET:
            return {
                getAll: prevState.getAll,
                get: prevState.getAll.find(p => p.id === Number.parseInt(action.payload))
            }
        case POKEDEX_VIEWED:
            return {
                ...prevState,
                getAll: prevState.getAll.map(p => p.id === action.payload ? ({ ...p, viewed: true }) : ({ ...p })),
            }
        case POKEDEX_NOT_VIEWED:
            return {
                ...prevState,
                getAll: prevState.getAll.map(p => p.id === action.payload ? ({ ...p, viewed: false }) : ({ ...p })),
            }
        case POKEDEX_ADD:
            prevState.getAll.unshift(action.payload)
            return {
                ...prevState,
                getAll: prevState.getAll,
            }
        case POKEDEX_DELETE:
            return {
                ...prevState,
                getAll: prevState.getAll.filter(p => p.id !== Number.parseInt(action.payload)),
            }
        default:
            return prevState
    }
}

export default pokedexReducer