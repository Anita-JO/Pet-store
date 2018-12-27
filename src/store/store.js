import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    addToFavorites(state, payload) {
      if (state.favorites.indexOf(payload) <= -1) {
        state.favorites.push(payload);
      }
    },
    clearFavorites(state) {
      state.favorites = [];
    },

    removeFromFavorites(state, payload) {
      state.favorites.splice(state.favorites.indexOf(payload), 1);
    }
  },
  actions: {
    addToFavorites({ commit }, payload) {
      commit("addToFavorites", payload);
    },
    removeFromFavorites({ commit }, payload) {
      commit("removeFromFavorites", payload);
    },
    clearFavorites({ commit }) {
      commit("clearFavorites");
    }
  }
});
