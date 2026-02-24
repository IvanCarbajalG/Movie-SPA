const API_KEY = 'd796286';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const buscarPeliculas = async (titulo, tipo = '', anio = '') => {
    try {
        const respuesta = await fetch(`${BASE_URL}&s=${titulo}&type=${tipo}&y=${anio}`);
        const datos = await respuesta.json();

        if (datos.Response === 'True') {
            return datos.Search;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error en la búsqueda:', error);
        return [];
    }
};

export const obtenerDetallesPelicula = async (id) => {
    try {
        const respuesta = await fetch(`${BASE_URL}&i=${id}&plot=full`);
        return await respuesta.json();
    } catch (error) {
        console.error('Error obteniendo detalles:', error);
        return null;
    }
};