import '../estilos/pages/Contacto.css'
const Contacto = (props) => {
    return(
        <main class="holder contacto">
        <div>
            <h2>Contacto</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"></input></p>
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: 12345678</li>
                <li>Email: contacto@elprado.com</li>
                <li>En todas las redes como El Prado Tenis Club</li>
            </ul>
        </div>
    </main>
    );
}

export default Contacto;