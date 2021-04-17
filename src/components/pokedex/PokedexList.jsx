import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import {
    Link,
  } from "react-router-dom";
import routes from '../../routes'
import { pokedexGetAll, pokedexDelete } from '../../store/pokedex/actions'
import { getAllPokedexSelector } from "../../store/pokedex/selectors";

const PokedexList = () => {
    const dispatch = useDispatch()
    const pokedex = useSelector(getAllPokedexSelector)

    // const [order, setOrder] = useState('DESC')
    // const location = useLocation()

    useEffect(() => {
        if (pokedex.length === 0) dispatch(pokedexGetAll())
    }, [pokedex, dispatch])

    const handleDelete = (event) => {
        dispatch(pokedexDelete(event.target.value))
    }
    
    return (
        <ol className="list-group list-group-numbered">
        {pokedex.map((pokemon) => (
            <li key={pokemon.id} className={`list-group-item d-flex justify-content-between align-items-start ${pokemon.viewed ? 'text-light bg-dark' : ''}`}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{pokemon.name.english}</div>
                    {pokemon.type[0]}
                </div>
                <Link className="btn btn-primary btn-sm" to={`${routes.POKEDEX}/${pokemon.id}`} >Ver Pokémon</Link>
                <button id="delete" className="btn btn-danger btn-sm" value={pokemon.id} onClick={handleDelete} >Eliminar</button>
            </li>
        ))}
        </ol>
    )
}

export default PokedexList