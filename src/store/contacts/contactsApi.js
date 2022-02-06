const BASE_URL_FOR_USERS = 'https://connections-api.herokuapp.com';
async function baseFetch(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Problem'));
}

export function fetchGetContacts(jwtToken) {
  return baseFetch(`${BASE_URL_FOR_USERS}/contacts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  });
}

export function fetchAddContacts(contact, jwtToken) {
  return baseFetch(`${BASE_URL_FOR_USERS}/contacts`, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  });
}

export function fetchDeleteContact(jwtToken, contactId) {
  return baseFetch(`${BASE_URL_FOR_USERS}/contacts/${contactId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  });
}
