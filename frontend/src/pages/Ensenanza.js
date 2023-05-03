import '../estilos/pages/Ensenanza.css'

const Ensenanza = (props) => {
    return(
        <main class="holder">
        <div>
            <h2>Enseñanza en el Prado Tenis Club</h2>
            <p>En El Prado Tenis contamos con una amplia cobertura de enseñanza del tenis, desde niños hasta adultos,
                tanto para hombres como para mujeres, de todos los niveles de juego.Todo está organizado por Proyección
                Tenis Escuelas.</p>
        </div>
        <div class="entrenamientos">
            <div class="entrenamiento">
                <img src="img/prado/escuela.jpg" alt="Escuela de tenis"></img>
                <h3>Escuela de tenis</h3>
                <p>Niños entre 3 y 18 años</p>
            </div>
            <div class="entrenamiento">
                <img src="img/prado/entrenamiento.jpg" alt="Entrenamiento"></img>
                <h3>Entrenamiento y pre-entrenamiento</h3>
                <p>7 años en adelante</p>
            </div>
            <div class="entrenamiento">
                <img src="img/prado/altorendimiento.jpg" alt="Alto rendimiento"></img>
                <h3>Alto rendimiento</h3>
                <p>Todas las edades</p>
            </div>
            <div class="entrenamiento">
                <img src="img/prado/entadultos.jpg" alt="Escuela de tenis adultos"></img>
                <h3>Escuela de tenis adultos</h3>
                <p>18 años en adelante</p>
            </div>
            <div class="entrenamiento">
                <img src="img/prado/particulares.png" alt="Clases particulares"></img>
                <h3>Clases particulares</h3>
                <p>Todas las edades</p>
            </div>
        </div>
        <div>
            <p>Sumate a Proyección Tenis Escuelas, un espacio dedicado a la enseñanza del tenis para todos los niveles y
                edades a cargo del mejor equipo de profesionales.</p>
            <p>Para consultas de días, horarios y valores comunicarse al 4280-1487 o 15-5664-2700.</p>
            <p><span class="destacado">EL PRADO TENIS CLUB</span> - 30 años respirando Tenis.</p>
        </div>
    </main>
    );
}

export default Ensenanza;