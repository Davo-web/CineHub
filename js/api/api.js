const apiKey = 'a9d7cd1c53e10ffb1abf24b69337091c';

export function trending() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json(); 
            })
        .then(data => {
            return data.results.slice(0, 6);
        })
}

export function popular() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${apiKey}`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json(); 
            })
        .then(data => {
            return data.results.slice(0, 6);
        })
}

export function nowPlaying() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json(); 
            })
        .then(data => {
            return data.results.slice(0, 4);
        })
}

export function aboutMovie(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json(); 
        })
        .then(movie => {
            return movie;
        })
}

export function upcoming() {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json(); 
        })
        .then(movie => {
            return movie;
        })
}