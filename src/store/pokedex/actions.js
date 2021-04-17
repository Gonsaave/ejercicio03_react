import { POKEDEX_GET_ALL, POKEDEX_GET, POKEDEX_VIEWED, POKEDEX_NOT_VIEWED, POKEDEX_ADD, POKEDEX_DELETE } from "."

export const pokedexGetAll = () => {
    return {
        type: POKEDEX_GET_ALL,
        payload: undefined,
    }
}

export const pokedexGet = (id) => {
    return {
        type: POKEDEX_GET,
        payload: id,
    }
} 

export const pokedexViewed = (id) => {
    return {
        type: POKEDEX_VIEWED,
        payload: id,
    }
} 

export const pokedexNotViewed = (id) => {
    return {
        type: POKEDEX_NOT_VIEWED,
        payload: id,
    }
}

export const pokedexAdd = (data) => {
    return {
        type: POKEDEX_ADD,
        payload: data,
    }
}

export const pokedexDelete = (id) => {
    return {
        type: POKEDEX_DELETE,
        payload: id,
    }
}