import { validateLink } from "./validateData";
const BASE_URL = 'https://api.mesto.dmilin.nomoredomains.sbs';

export function checkCookieWithToken() {
  return fetch(`${BASE_URL}/checkcookie`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((res) => {
    if (res.ok) {
      return res;
    } else {
      return Promise.reject(res.status);
    }
  })
}

export function checkToken () {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    }
  })
  .then((res) => {
    if (res.ok) {
      return res
    } else {
      return Promise.reject(res.status)
    }
  })
  .then(res => {
    if (res.status !== 401) {
      return res
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  })
}

export function signupUser({email, password, name}) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password, name: name })
  })
}

export function signinUser({email, password}) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password })
  })
}

export function editUserProfile({name, email}) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, email: email})
  })
}

export function signoutUser() {
  return fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
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
      country: country && typeof(country) === 'string' ? country : 'No info',
      director: director && typeof(director) === 'string' ? director : 'No info',
      duration: duration && typeof(duration) === 'number' ? duration : 0,
      year: year && typeof(year) === 'string' ? year : 'No info',
      description: description && typeof(description) === 'string' ? description : 'No info',
      image: image && validateLink(image) ? image : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      trailerLink: trailerLink && validateLink(trailerLink) ? trailerLink : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      nameRU: nameRU && typeof(nameRU) === 'string' ? nameRU : 'No info',
      nameEN: nameEN && typeof(nameEN) === 'string' ? nameEN : 'No info',
      thumbnail: thumbnail && validateLink(thumbnail) ? thumbnail : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      movieId: movieId && typeof(movieId) === 'number' ? movieId : 0,
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('?????????????????? ????????????')
    }
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