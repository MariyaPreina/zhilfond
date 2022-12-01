import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: () => ({
        status: '',
        users: [],
        selectedUser: null,
    }),

    actions: {
        async fetchUsers({commit}, payload) {
          try {
            commit('SET_STATUS', 'loading');
            const users = await axios.get(`${process.env.VUE_APP_BASE_URL}users?${payload}`);
            commit('SET_ALL_USERS', users.data);
            commit('SET_STATUS', 'success');
          } catch (e) {
            commit('SET_STATUS', 'error');
            console.warn('[VUEX/fetchUsers]: ', e);
          }
        },
    },

    mutations: {
        SET_ALL_USERS(state, payload) {
            state.users = payload;
        },

        SET_STATUS(state, payload) {
            state.status = payload;
        },

        SET_SELECTED_USER(state, payload) {
            state.selectedUser = payload;
        },
    },
})
