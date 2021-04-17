import {
    Link,
    NavLink,
} from "react-router-dom";
import routes from "../../routes";
import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.NavbarMenu}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={routes.POKEDEX}
                            >Pokedex</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu