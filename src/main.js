import { buscarPeliculas, obtenerDetallesPelicula } from './api.js';
import { obtenerFavoritas, guardarPeliculaEnFavoritos, eliminarPeliculaDeFavoritos } from './storage.js';

const formularioBusqueda = document.getElementById('search-form');
const contenedorResultados = document.getElementById('results-container');
const listaFavoritosUI = document.getElementById('favorites-list');
const modal = document.getElementById('movie-modal');
const cuerpoModal = document.getElementById('modal-body');
const botonCerrarModal = document.querySelector('.close-button');

formularioBusqueda.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const texto = document.getElementById('search-input').value;
    const tipo = document.getElementById('type-select').value;
    const anio = document.getElementById('year-input').value;

    contenedorResultados.innerHTML = '<p>Buscando películas...</p>';

    const resultados = await buscarPeliculas(texto, tipo, anio);
    renderizarPeliculas(resultados);
});

function renderizarPeliculas(peliculas) {
    contenedorResultados.innerHTML = '';

    if (peliculas.length === 0) {
        contenedorResultados.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    peliculas.forEach(peli => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'movie-card';
        tarjeta.innerHTML = `
            <img src="${peli.Poster !== 'N/A' ? peli.Poster : 'https://via.placeholder.com/300x450?text=Sin+Imagen'}" alt="${peli.Title}">
            <div class="movie-card-content">
                <h3>${peli.Title}</h3>
                <p>${peli.Year}</p>
                <button class="btn-info" data-id="${peli.imdbID}">Más info</button>
                <button class="btn-fav" data-peli='${JSON.stringify(peli)}'>⭐ Favorito</button>
            </div>
        `;
        contenedorResultados.appendChild(tarjeta);
    });
}

// Evento delegado para botones de Mas Info y Favorito
contenedorResultados.addEventListener('click', async (e) => {
    // Si hace clic en Más Info
    if (e.target.classList.contains('btn-info')) {
        const id = e.target.dataset.id;
        const detalles = await obtenerDetallesPelicula(id);
        abrirModal(detalles);
    }

    // Si hace clic en Favorito
    if (e.target.classList.contains('btn-fav')) {
        const datosPeli = JSON.parse(e.target.dataset.peli);
        guardarPeliculaEnFavoritos(datosPeli);
        actualizarFavoritosUI();
    }
});

//Funciones para los modales y favoritos
function abrirModal(peli) {
    cuerpoModal.innerHTML = `
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <img src="${peli.Poster}" style="width: 150px;">
            <div style="flex: 1;">
                <h2>${peli.Title}</h2>
                <p><strong>Género:</strong> ${peli.Genre}</p>
                <p><strong>Sinopsis:</strong> ${peli.Plot}</p>
                <p><strong>Actores:</strong> ${peli.Actors}</p>
                <p><strong>Rating:</strong> ⭐ ${peli.imdbRating}</p>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

botonCerrarModal.onclick = () => modal.style.display = 'none';

function actualizarFavoritosUI() {
    const favoritos = obtenerFavoritas();
    listaFavoritosUI.innerHTML = favoritos.map(p => `
        <div class="fav-item" style="border-bottom: 1px solid #ccc; padding: 5px; display: flex; justify-content: space-between;">
            <span>${p.Title}</span>
            <button onclick="borrarFavorito('${p.imdbID}')">❌</button>
        </div>
    `).join('');
}

window.borrarFavorito = (id) => {
    eliminarPeliculaDeFavoritos(id);
    actualizarFavoritosUI();
};

actualizarFavoritosUI();