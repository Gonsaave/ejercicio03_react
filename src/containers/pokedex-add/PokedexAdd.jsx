import { useEffect } from "react";
import {
    Link,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import routes from "../../routes";
import PokedexAddForm from "../../components/pokedex-add/PokedexAddForm"
import { pokedexGetAll } from '../../store/pokedex/actions'
import { getAllPokedexSelector } from "../../store/pokedex/selectors";

const PokedexAdd = () => {
    const dispatch = useDispatch()
    const pokedex = useSelector(getAllPokedexSelector)

    useEffect(() => {
        if (pokedex.length === 0) dispatch(pokedexGetAll())
    }, [pokedex, dispatch])
    
    return (
        <div className="container">
            <PokedexAddForm></PokedexAddForm>
            <Link to={`${routes.POKEDEX}`}>Volver</Link>
        </div>
    )
}

export default PokedexAdd