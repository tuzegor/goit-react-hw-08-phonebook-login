const BASE_URL_FOR_USERS = 'https://connections-api.herokuapp.com/users';

async function baseFetch(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Problem'));
}

export function fetchSignUp(userData) {
  return baseFetch(`${BASE_URL_FOR_USERS}/signup`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function fetchLogin(userData) {
  return baseFetch(`${BASE_URL_FOR_USERS}/login`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function fetchLogout(userData, jwtToken) {
  return baseFetch(`${BASE_URL_FOR_USERS}/login`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function fetchCurrentUser(jwtToken) {
  return baseFetch(`${BASE_URL_FOR_USERS}/current`);
}
