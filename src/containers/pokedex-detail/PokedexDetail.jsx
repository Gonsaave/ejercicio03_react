import { useEffect } from "react";
import {
    useParams,
    Link,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import routes from "../../routes";
import { pokedexGet, pokedexGetAll, pokedexViewed, pokedexNotViewed } from '../../store/pokedex/actions'
import { getAllPokedexSelector, getPokedexSelector } from "../../store/pokedex/selectors";

const PokedexDetail = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(getPokedexSelector)
    const pokedex = useSelector(getAllPokedexSelector)

    const { id } = useParams()

    useEffect(() => {
        if (pokedex.length === 0) dispatch(pokedexGetAll())
        if (pokedex.length > 0) dispatch(pokedexGet(id))
    }, [id, pokedex, dispatch])

    const handleMarkViewed = () => {
        const idPokemon = pokemon.id
        dispatch(pokedexViewed(idPokemon))
    }

    const handleMarkNotViewed = () => {
        const idPokemon = pokemon.id
        dispatch(pokedexNotViewed(idPokemon))
    }
    
    return pokemon ? (
        <div className="container">
            <h5>Detalle Pokémon</h5>
            <div className="card" style={{width: '18rem'}}>
                {pokemon.id && <img  src={pokemon.image} className="card-img-top" alt={pokemon.name.english}/>}
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name.english}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {pokemon.id && <p className="card-text">Tipo: {pokemon.type[0]}/{pokemon.type[1]}</p>}
                    </li>
                    <li className="list-group-item">
                        {pokemon.id && <p className="card-text">N° Pokedex: {pokemon.id}</p>}
                    </li>
                    <li className="list-group-item">
                        <div className="btn-group" role="group" aria-label="action-buttons">
                            <button className="btn btn-success btn-sm" onClick={handleMarkViewed}>Marcar como visto</button>
                            <button className="btn btn-warning btn-sm" onClick={handleMarkNotViewed}>Marcar como no visto</button>
                        </div>
                    </li>
                </ul>
                <div className="card-body text-center">
                    <Link className="btn btn-link btn-block" to={routes.POKEDEX}>Volver</Link>
                </div>
            </div>
        </div>
    ) : (<div>Loading...</div>)
}

export default PokedexDetail