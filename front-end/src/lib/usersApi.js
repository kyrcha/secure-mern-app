import axios from 'axios';
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

export function saveAUser(user) {
  if(user.id) {
    return put(`users/${user.id}`, user);
  } else {
    return post(`users`, user)
  }
}

function post(url, body) {
  return axios.post(baseUrl + url, body).then(onSuccess, onError);
}

function put(url, body) {
  return axios.put(baseUrl + url, body).then(onSuccess, onError);
}

function del(url) {
  return axios.delete(baseUrl + url).then(onSuccess, onError);
}

function get(url) {
  return axios.get(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.data;
}

function onError(error) {
  console.log(error);// eslint-disable-line no-console
}
