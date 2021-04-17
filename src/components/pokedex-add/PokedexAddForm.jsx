import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { pokedexAdd } from '../../store/pokedex/actions'
import { getAllPokedexSelector } from "../../store/pokedex/selectors";

const PokedexAddForm = () => {
    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [numero, setNumero] = useState('')
    const [urlImage, setUrlImage] = useState('')
    const pokedex = useSelector(getAllPokedexSelector)
    const dispatch = useDispatch()

    const handleChangeNombre = (event) => setNombre(event.target.value)
    const handleChangeTipo = (event) => setTipo(event.target.value)
    const handleChangeNumber = (event) => setNumero(event.target.value)
    const handleChangeUrlImage = (event) => setUrlImage(event.target.value)

    useEffect(() => {

    }, [pokedex])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const numb = Number.parseInt(numero)
        const checkId = (p) => p.id === numb

        console.log(pokedex)
        if(pokedex.some(checkId)){
            alert("POKÉMON CON ESTE NÚMERO YA EXISTE!")
            return false
        }

        dispatch(pokedexAdd({
            id: numb,
            name: {english: nombre},
            type: [tipo],
            image: urlImage
        }))

        alert("POKEMON AGREGADO EXITOSAMENTE! PRESIONE 'VOLVER' PARA VER SU LISTA.")
        return true
    }
    
    return (
        <>
            <h5>Agregar nuevo Pokémon</h5>
            <div className="card">
                <div className="card-body">
                    <form id="new-pokemon" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="#nombre" className="form-label">NOMBRE</label>
                            <input type="text" name="nombre" onChange={handleChangeNombre} value={nombre} className="form-control form-control-sm"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="#tipo" className="form-label">TIPO</label>
                            <input type="text" name="tipo" onChange={handleChangeTipo} value={tipo} className="form-control form-control-sm"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="#numero" className="form-label">NÚMERO</label>
                            <input type="number" name="numero" onChange={handleChangeNumber} value={numero} className="form-control form-control-sm"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="#url_image" className="form-label">URL IMAGEN</label>
                            <input type="text" name="url_image" onChange={handleChangeUrlImage} value={urlImage} className="form-control form-control-sm"/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-success btn-block">GUARDAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PokedexAddForm