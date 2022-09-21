const BASE_URL = 'http://localhost:3001';

// export function temporaryAuth() {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email: 'user@mail.ru', password: '123' })
//   })
// }


export function checkCookieWithToken() {
  return fetch(`${BASE_URL}/checkcookie`, {
    method: 'GET',
    credentials: 'include'
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

export function signoutUser() {
  return fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getSavedMovies() {
  console.log('getSavedMovie has started');
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
  .then(res => res.json())
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