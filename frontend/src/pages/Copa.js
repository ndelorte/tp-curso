import '../estilos/pages/Copa.css'

const Copa = (props) => {
    return(
        <main class="holder">

        
        <h2 id="TituloCampeones">Ultimos campeones</h2>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/prado/librea.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>LIBRE A</h5>
                        <p>Campeon Juan - Subcampeon Pedro</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/prado/libreb.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>LIBRE B</h5>
                        <p>Campeon Juan - Subcampeon Pedro</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/prado/librec.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>LIBRE C</h5>
                        <p>Campeon Juan - Subcampeon Pedro</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/prado/inicial.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>INICIAL</h5>
                        <p>Campeon Juan - Subcampeon Pedro</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h2>Jugá todos los meses la copa del club</h2>
        <p>Torneos proyeccion tenis organiza la <span class="destacado">"Copa El Prado"</span> todos los meses para las
            categorias A, B, C e Inicial. La copa se juega durante todo el mes con horarios a convenir entre los
            jugadores rivales, con sistema de juego de simple eliminacion.</p>
        <p>El valor de la inscripción es de $4500 y para inscribirte podes contactarnos por cualquiera de nuestras redes
            o Whatsapp, tenes tiempo hasta el 10 de cada mes para hacerlo</p>
    </main>
    );
}

export default Copa;