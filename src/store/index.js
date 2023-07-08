import Vue from 'vue';
import Vuex from 'vuex';
import { getAllCharacters } from '@/services/rickAndMortyService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  getters: {
  },
  mutations: {
    SET_ALL_CHARACTERS(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    async setAllCharacters({ commit }) {
      const response = await getAllCharacters();
      commit('SET_ALL_CHARACTERS', response.data.results);
    },
  },
  modules: {
  },
});
