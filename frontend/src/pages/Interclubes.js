import '../estilos/pages/Interclubes.css'

const Interclubes = (props) => {
    return(
        <main class="holder">
        <h2>Resultados Interclubes 2023</h2>
        <div class="novedades">
            <h4>Equipo Varones sub16</h4>
            <p>Los chicos ganaron el domingo su primer partido como visitantes 2-1</p>
            <img src="img/prado/equipo1.jpg" width="200px" alt=""></img>
            <hr />
        </div>
        <div class="novedades">
            <h4>Equipo Varones libre</h4>
            <p>Los chicos ganaron el sabado su primer partido como locales 3-0</p>
            <img src="img/prado/equipo3.jpg" width="200px" alt=""></img>
            <hr />
        </div>
        <div class="novedades">
            <h4>Equipo Damas sub16</h4>
            <p>Las chicas perdieron el domingo su primer partido como locales 2-1</p>
            <img src="img/prado/equipo4.png" width="200px" alt=""></img>
            <hr />
        </div>
    </main>
    );
}

export default Interclubes;