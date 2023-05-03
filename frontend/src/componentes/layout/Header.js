import { NavLink } from "react-router-dom";
import '../../estilos/layout.css'

const Header = (props) => {
    return(
        <header>
        <NavLink to="/">
        <div class="holder">
            <img src="img/prado/Imagen1.png" width="100" alt="El Prado"/>
            <h1>El Prado</h1>
        </div>
        </NavLink>
        <div class="redes  holder">
            <a href="https://www.instagram.com/elpradotenisclub/?hl=es-la"><img src="img/prado/instragram.png"
                    width="40" alt="Instagram"/></a>
            <a href="https://twitter.com/elpradotc"><img src="img/prado/twitter.png" width="40" alt="Twitter"/></a>
            <a href="https://www.facebook.com/elprado.tenisclub"><img src="img/prado/facebook.png" width="40"
                    alt="Facebook"/></a>
        </div>
    </header>
    );
}

export default Header;