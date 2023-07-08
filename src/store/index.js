import Vue from 'vue';
import Vuex from 'vuex';
import { getAllCharacters, getSingleCharacter } from '@/services/rickAndMortyService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    character: {},
  },
  getters: {
  },
  mutations: {
    SET_ALL_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_SINGLE_CHARACTER(state, character) {
      state.character = character;
    },
  },
  actions: {
    async setAllCharacters({ commit }) {
      const response = await getAllCharacters();
      commit('SET_ALL_CHARACTERS', response.data.results);
    },
    async setSingleCharacter({ commit }, id) {
      const response = await getSingleCharacter(id);
      commit('SET_SINGLE_CHARACTER', response.data);
    },
  },
  modules: {
  },
});
