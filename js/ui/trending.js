import { trending } from '../api/api.js';

export async function renderTrending() {
    const cardBox = document.querySelector('.trending-box-card');
    const error = cardBox.querySelector('.loading-error');
    if(error) cardBox.innerHTML = '';
    try {
        const movies = await trending();
        movies.forEach(movie => {
            const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            const cardHtml = `
                <a href="#" class="movie-card">
                    <img src="${imgUrl}" alt="${movie.title}" class="movie-card__img">
                    <h4 class="movie-card__title">${movie.title}</h4>
                    <div class="rating">
                        <svg class="rating__img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" color="yellow" viewBox="0 0 24 24"><path fill="currentColor" d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18z"/></svg>
                        <span class="rating__value">${movie.vote_average?.toFixed(1) || '0.0'}</span>
                    </div>
                </a>
            `;
            cardBox.insertAdjacentHTML("beforeend", cardHtml);
        });
    }
    catch{
        cardBox.insertAdjacentHTML('beforeend', `<span class="loading-error">Failed to load trending movies</span>`)
    }
}