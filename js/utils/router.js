import { renderFilmPage } from "../ui/pages/renderFilmPage.js";

export function rout() {
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#/') {
            // Render the home page or perform any necessary actions for the home route
            location.reload();
        }
        const hash = window.location.hash;
        const match = hash.match(/^#\/movie\/(\d+)$/);
        if (match) {
            const movieId = parseInt(match[1]);
            renderFilmPage(movieId);
        }
        window.scrollTo(0, 0); // чтобы при переходе не оставался старый скролл
    });
} 