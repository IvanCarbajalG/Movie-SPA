export const obtenerFavoritas = () => {
    return JSON.parse(localStorage.getItem('peliculasFavoritas')) || [];
};

export const guardarPeliculaEnFavoritos = (pelicula) => {
    const favoritos = obtenerFavoritas();

    if (!favoritos.some(f => f.imdbID === pelicula.imdbID)) {
        const peliculaConFecha = { ...pelicula, fechaAgregada: Date.now() };
        favoritos.push(peliculaConFecha);
        localStorage.setItem('peliculasFavoritas', JSON.stringify(favoritos));
    }
}

export const eliminarPeliculaDeFavoritos = (id) => {
    const favoritos = obtenerFavoritas().filter(pelicula => pelicula.imdbID !== id);
    localStorage.setItem('peliculasFavoritas', JSON.stringify(favoritos));
}