import { aboutMovie } from "../../api/api.js";

export async function renderFilmPage(movie_id) {
    const activeItem = document.querySelector('.sidebar__item.active');
    if (activeItem) activeItem.classList.remove('active');

    const movieDetails = await aboutMovie(movie_id);
    const imgUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    const backdropUrl = movieDetails.backdrop_path 
        ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` 
        : null;
    
    const genresHtml = movieDetails.genres?.map(g => 
        `<span class="film-page__genre">${g.name}</span>`
    ).join('') || '';

    const countriesHtml = movieDetails.production_countries?.map(c => c.name).join(', ') || 'Unknown';
    const budgetFormatted = movieDetails.budget > 0 
        ? `$${(movieDetails.budget / 1_000_000).toFixed(1)}M` 
        : 'N/A';
    const revenueFormatted = movieDetails.revenue > 0 
        ? `$${(movieDetails.revenue / 1_000_000).toFixed(1)}M` 
        : 'N/A';

    const hours = Math.floor(movieDetails.runtime/60);
    const minutes = movieDetails.runtime % 60;
    const runTime = hours + 'h ' + minutes + "min";
    const filmPageHtml = `
        ${backdropUrl ? `
        <div class="film-page__backdrop-wrapper">
            <img class="film-page__backdrop-img" src="${backdropUrl}" alt="${movieDetails.title} backdrop">
            <div class="film-page__backdrop-overlay"></div>
        </div>
        ` : ''}
        
        <div class="film-page__content">
            <div class="film-page__header">
                <div class="film-page__poster-wrapper">
                    <img class="film-page__poster" src="${imgUrl}" alt="${movieDetails.title} poster">
                    <div class="film-page__poster-rating">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        ${movieDetails.vote_average?.toFixed(1) || '0.0'}
                    </div>
                </div>
                
                <div class="film-page__info">
                    <h1 class="film-page__title">${movieDetails.title}</h1>
                    ${movieDetails.tagline ? `<p class="film-page__tagline">"${movieDetails.tagline}"</p>` : ''}
                    
                    <div class="film-page__meta">
                        <span class="film-page__year">${movieDetails.release_date?.split('-')[0] || 'N/A'}</span>
                        <span class="film-page__separator">•</span>
                        <span class="film-page__runtime">${runTime}</span>
                        <span class="film-page__separator">•</span>
                        <span class="film-page__country">${countriesHtml}</span>
                    </div>
                    
                    <div class="film-page__genres">
                        ${genresHtml}
                    </div>
                    
                    <div class="film-page__actions">
                        <button class="film-page__btn film-page__btn--primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                            </svg>
                            Add to Watchlist
                        </button>
                        ${movieDetails.homepage ? `
                        <a href="${movieDetails.homepage}" target="_blank" rel="noopener noreferrer" class="film-page__btn film-page__btn--secondary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                            </svg>
                            Website
                        </a>
                        ` : ''}
                    </div>
                    
                    <div class="film-page__stats">
                        <div class="film-page__stat">
                            <span class="film-page__stat-label">Budget</span>
                            <span class="film-page__stat-value">${budgetFormatted}</span>
                        </div>
                        <div class="film-page__stat">
                            <span class="film-page__stat-label">Revenue</span>
                            <span class="film-page__stat-value">${revenueFormatted}</span>
                        </div>
                        <div class="film-page__stat">
                            <span class="film-page__stat-label">Status</span>
                            <span class="film-page__stat-value">${movieDetails.status || 'N/A'}</span>
                        </div>
                        <div class="film-page__stat">
                            <span class="film-page__stat-label">Popularity</span>
                            <span class="film-page__stat-value">${Math.round(movieDetails.popularity || 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="film-page__section">
                <h2 class="film-page__section-title">Overview</h2>
                <p class="film-page__overview">${movieDetails.overview || 'No overview available.'}</p>
            </div>
            
            ${movieDetails.credits?.cast?.length ? `
            <div class="film-page__section">
                <h2 class="film-page__section-title">Top Cast</h2>
                <div class="film-page__cast">
                    ${movieDetails.credits.cast.slice(0, 6).map(actor => `
                        <div class="film-page__cast-card">
                            <img class="film-page__cast-img" 
                                src="${actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : 'https://via.placeholder.com/185x278?text=No+Image'}" 
                                alt="${actor.name}">
                            <div class="film-page__cast-info">
                                <span class="film-page__cast-name">${actor.name}</span>
                                <span class="film-page__cast-role">${actor.character}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    const main = document.querySelector('main');
    main.innerHTML = filmPageHtml;
}