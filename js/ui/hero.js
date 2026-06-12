import { nowPlaying, aboutMovie } from '../api/api.js';

export function renderHero() {
    nowPlaying()
        .then(movies => {
            const hero = document.querySelector('.hero__slide');
            movies.forEach(movie => {
                const imgUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
                hero.style.backgroundImage = `
                        linear-gradient(to right, 
                            #0b0f19 0%, 
                            transparent 80%),
                        url(${imgUrl})`;
                hero.querySelector('.hero__title').textContent = movie.title;
                hero.querySelector('.rating__value').textContent = movie.vote_average.toFixed(1);
                hero.querySelector('.hero__year').textContent = movie.release_date.slice(0, 4);
                hero.querySelector('.hero__description').textContent = movie.overview;
                const movie_id = movie.id;
                aboutMovie(movie_id)
                    .then(movie => {
                        const hours = Math.floor(movie.runtime/60);
                        const minutes = movie.runtime % 60;
                        const runTime = hours + 'h ' + minutes + "min";
                        hero.querySelector('.hero__duration').textContent = runTime;
                    })
            });
        });
}