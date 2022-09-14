const BASE_URL = 'http://localhost:3001';

export function temporaryAuth() {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'user@mail.ru', password: '123' })
  })
}

export function getSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    return res.ok? res.json() : Promise.reject(res.status)
  })
}

export function saveMovie(info) {
  const {
    country,
    director,
    duration,
    year,
    description,
    trailerLink,
    nameRU,
    nameEN,
  } = info;
  const image = `https://api.nomoreparties.co${info.image.url}`;
  const thumbnail = 'https://api.nomoreparties.co' + info.image.formats.thumbnail.url;
  const movieId = info.id
  return fetch(`${BASE_URL}/movies`, {
    credentials: "include",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
    })
  })
}

export function deleteMovie(id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}