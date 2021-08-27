import Vue from 'vue'
import Vuex from 'vuex';
import rootState from './store/index';
import rootGetters from './store/getters';
import rootActions from './store/actions';
import rootMutations from './store/mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: rootState,
    actions: rootActions,
    mutations: rootMutations,
    getters: rootGetters,
})