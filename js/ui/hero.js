import { nowPlaying, aboutMovie } from '../api/api.js';
import { slider } from './slider.js';

export async function renderHero() {
    const hero = document.querySelector('.hero');
    const heroSlider = document.querySelector('.hero__slider-track');
    const error = hero.querySelector('.loading-error');
    if (error) hero.innerHTML = '';
    try {
        const imgsPaths = [];

        const movies = await nowPlaying();
        for (const movie of movies) {
            const movie_id = movie.id;
            const movieDetails = await aboutMovie(movie_id);

            const hours = Math.floor(movieDetails.runtime/60);
            const minutes = movieDetails.runtime % 60;
            const runTime = hours + 'h ' + minutes + "min";

            const imgUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
            imgsPaths.push(imgUrl);

            const slideHtml = `
                <div class="hero__slide slide">
                    <p class="hero__badge">FEATURED</p>
                    <h2 class="hero__title">${movie.title}</h2>
                    <div class="hero__stats">
                        <div class="rating hero__rating">
                            <svg class="rating__img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" color="yellow" viewBox="0 0 24 24"><path fill="currentColor" d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18z"/></svg>
                            <span class="rating__value">${movie.vote_average?.toFixed(1) || '0.0'}</span>
                        </div>
                        <p class="hero__year">${movie.release_date.slice(0, 4)}</p>
                        <p class="hero__duration">${runTime}</p>
                    </div>
                    <p class="hero__description">${movie.overview}</p>
                    <div class="hero__btns">
                        <button class="hero__btn hero__btn--explore">
                            <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                            <span>Explore</span>
                        </button>
                        <button class="hero__btn hero__btn--watchlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M12 5v14m7-7H5"/></svg>
                            <span>Watchlist</span>
                        </button>
                    </div>
                </div>`;
            heroSlider.insertAdjacentHTML('beforeend', slideHtml);
        }
        const slides = document.querySelectorAll('.hero__slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.backgroundImage = `
                    linear-gradient(to right, 
                        #0b0f19 0%, 
                        transparent 80%),
                    url(${`${imgsPaths[i]}`})`;
        }
        slider();
        
    }
    catch {
        document.querySelector('.hero__pagination').style.display = 'none';
        document.querySelector('.hero .rating__img').style.display = 'none';
        document.querySelector('.hero__btns').style.display = 'none';
        document.querySelector('.hero__badge').style.display = 'none';
        hero.insertAdjacentHTML('beforeend', `<span class="loading-error">Failed to load movie</span>`);
    }
}