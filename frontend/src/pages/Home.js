import '../estilos/pages/Home.css'

const Home = (props) => {
    return (
        <main class="holder">
            <div class="imgpresentacion">
                <img src="img/prado/remera.jpg" alt="El Prado" />
            </div>
            <div class="columnas">
                <div class="presentacion">
                    <h2>Un club a tu medida</h2>
                    <p>El Prado Tenis en sus más de 30 años de experiencia ha ido desarrollando sus instalaciones para ofrecer el
                        mejor servicio.
                        Gracias a los que confían día a día en nosotros, hoy se convirtió en un club no sólo para venir a
                        jugar al tenis sino también para pasar buenos momentos en familia.
                        Si todavía no viniste, esto lo que vas a encontrar.
                        Te esperamos! Respirá tenis!</p>
                    <ul>
                        <li>7 canchas con excelente iluminacion</li>
                        <li>Vestuarios con duchas para Damas y Caballeros</li>
                        <li>Buffet</li>
                        <li>Pro-shop</li>
                        <li>Frontón</li>
                        <li>Tribunas</li>
                        <li>Amplio parque</li>
                    </ul>
                </div>
                <div class="testimonios">
                    <h2>Testimonios</h2>
                    <div class="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Perez - testimonio.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;