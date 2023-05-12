import '../estilos/pages/Interclubes.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import NovedadItem from '../componentes/novedades/NovedadItem';



const Interclubes = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <main class="holder">
            <h2>Resultados Interclubes 2023</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id} titulo={item.titulo} subtitulo={item.subtitulo} imagen={item.imagen} cuerpo={item.cuerpo}/>)
                )
            }
        </main>
    );
}

export default Interclubes;