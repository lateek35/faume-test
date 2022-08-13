

import { createStore } from "vuex";

const store = createStore({
  state: {
    cartCount: 2,
    menuOpen: false,
    products: [],
  },
  mutations: {
    setProducts(state, products) {
        state.products = products;
    },
    setMenuOpen(state, payload) {
        state.menuOpen = payload;
    },
  },
  actions: {
    // Fetch our product
    fetchAllProducts(context) {
      return fetch("https://fakestoreapi.com/products?limit=4")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json))
        .catch((err) => console.error(err));
    },
  },

  getters: {
    products(state) {
        return state.products;
    },
    menuOpen(state) {
        return state.menuOpen;
    },
  },
});
export default store;