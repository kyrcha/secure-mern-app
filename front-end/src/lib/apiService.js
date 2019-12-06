import queryString from 'query-string';
import jwtService from './jwtService';
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl();

const apiService = {

  setHeaders() {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (jwtService.getToken()) {
      headersConfig['x-access-token'] = jwtService.getToken();
    }

    return headersConfig;
  },

  get(path, queryParams) {
    const query = queryParams ? `?${queryString.stringify(queryParams)}` : '';
    return fetch(`${baseUrl}${path}${query}`, { headers: this.setHeaders() })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((error) => { throw error; });
      });
  },

  delete(path) {
    return fetch(`${baseUrl}${path}`, {
      method: 'DELETE',
      headers: this.setHeaders(),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((error) => { throw error; });
    });
  },

  post(path, data) {
    return fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: this.setHeaders(),
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((error) => { throw error; });
    });
  },

  put(path, data) {
    return fetch(`${baseUrl}${path}`, {
      method: 'PUT',
      headers: this.setHeaders(),
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((error) => { throw error; });
    });
  },

};

export default apiService;
