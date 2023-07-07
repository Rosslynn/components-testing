import axios from 'axios';

/**
 * Función para realizar una petición GET
 * @param {String} url - URL
 * @param {Object} options - Opciones de la solicitud
 * @returns - Promesa con la respuesta
 */
// eslint-disable-next-line import/prefer-default-export
export function makeGetRequest(url, options) {
  return axios.get(url, options);
}
