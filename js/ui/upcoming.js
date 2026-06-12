import { upcoming } from "../api/api.js";

export function renderUpcoming() {
    upcoming()
        .then(movie => {
            movie.results.slice(0, 3).forEach(movieInfo => {
                console.log(movieInfo)
                const urlImg = `https://image.tmdb.org/t/p/w154${movieInfo.poster_path}`;
                const title = movieInfo.title;
                const year = movieInfo.release_date.slice(0, 4);
                const movieHtml = `
                <li class="widget-panel__item">
                    <a href="#">
                        <div class="widget-panel__film-info upcoming-movie-box">
                            <img src="${urlImg}" alt="${title}">
                            <div class="widget-panel__film-text">
                                <h4 class="widget-panel__film-name">${title}</h4>
                                <p class="widget-panel__film-date">${year}</p>
                            </div>
                        </div>
                    </a>
                    <button class="widget-panel__item-btn" aria-label="add to watchlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2m0 16.553l-6-3.428l-6 3.428V4h12z"/></svg>
                    </button>
                </li>`;
                const upcomingList = document.querySelector('.upcoming-list');
                upcomingList.insertAdjacentHTML('afterbegin', movieHtml);
            });
        })
}