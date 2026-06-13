const apiKey = 'a9d7cd1c53e10ffb1abf24b69337091c';

export async function trending() {
    const response =  await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`);
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.results.slice(0, 12);
}

export async function popular() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.results.slice(0, 12);
}

export async function nowPlaying() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.results.slice(0, 5);
}

export async function aboutMovie(movie_id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
}

export async function upcoming() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.results.slice(0, 8);
}