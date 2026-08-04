import { renderFilmPage } from "../ui/pages/film.js";

export function rout() {
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash === '' || hash === '#/') {
            // рендер home page или перегазгрузка страницы для попадания в home
            location.reload();
        }

        const match = hash.match(/^#\/movie\/(\d+)$/);
        if (match) {
            const movieId = parseInt(match[1]);
            renderFilmPage(movieId);
        }

        // if (hash === '#/discover') {
        //     // ... рендер discover page
        // }
        window.scrollTo(0, 0); // чтобы при переходе не оставался старый скролл
    });
} 