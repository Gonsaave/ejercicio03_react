import {
    Link,
  } from "react-router-dom";
import routes from '../../routes'
import PokedexList from '../../components/pokedex/PokedexList'

const Pokedex = () => {
    
    return (
        <div className="container-fluid">
            <Link className="btn btn-success btn-sm float-end" to={`${routes.POKEDEX_NEW}`} >Agregar Pokémon</Link>
            <h5>Listado Pokémon</h5>
            <br/>
            <br/>
            <PokedexList></PokedexList>
        </div>
    )
}

export default Pokedex