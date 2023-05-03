import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/">Inicio</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/ensenanza">Enseñanza</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/copa">Copa</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/interclubes">Interclubes</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/galeria">Galeria</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "activo" : undefined} to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;