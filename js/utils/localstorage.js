// default LS operation
export function saveToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLS(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}


// LS operation with no JSON type (at theme btn)
export function saveThemeToLS(key, value) {
    localStorage.setItem(key, value);
}

export function getThemeFromLS (key) {
    return localStorage.getItem(key);
}