import { makeGetRequest } from '@/clients/clientWrapper';

const baseURL = process.env.BASE_URL_RICK_AND_MORTY;

/**
 * Función para obtener el listado de personajes de Rick y Morty
 * @returns Promesa con la respuesta
 */
export function getAllCharacters() {
  const url = `${baseURL}/character`;
  return makeGetRequest(url);
}

/**
 * Función para obtener más informatión de un personaje dado su ID
 * @returns Promesa con la respuesta
 */
export function getSingleCharacter(id) {
  const url = `${baseURL}/character/${id}`;
  return makeGetRequest(url);
}
