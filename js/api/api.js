const apiKey = 'a9d7cd1c53e10ffb1abf24b69337091c';
const baseUrl = 'https://api.themoviedb.org/3/movie/11'
const movie_id = 823464;

export function apiFetch() {
    fetch (`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${apiKey}`) 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data)
            let filePath = data.posters[0].file_path;
            const movieCard = document.querySelector('.movie-card__img');
            movieCard.src = `https://image.tmdb.org/t/p/w500${filePath}`;
        })

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-EN&query=Godzilla_Kong:_The_New_Empire&page=1&include_adult=false`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json(); 
            })
            .then(data => {
                console.log(data)
                
            })
}  