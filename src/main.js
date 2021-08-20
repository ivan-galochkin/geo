import Vue from 'vue'
import App from './App.vue'
import {router} from "@/router";
import {BootstrapVue} from 'bootstrap-vue'

import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'
import VueKinesis from "vue-kinesis";


Vue.config.productionTip = false

Vue.use(VueKinesis);
Vue.use(BootstrapVue);
Vue.use(VueAxios);
Vue.use(Vuex);


const defaultState = () => {
    return {
        tokens: {access_token: null, refresh_token: null},
        user: null,
        quiz_data: {
            current_task_state: null,
            current_states: [],
            current_states_count: 0,
            current_correct_answers: 0,
            current_time: 0
        }
    }
}

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        paths: ["tokens", "user"],
        storage: window.localStorage,
    }), createPersistedState({
        paths: ["quiz_data"],
        storage: window.sessionStorage
    })],
    state: defaultState(),
    mutations: {
        setTokens(state, payload) {
            state.tokens.access_token = payload.tokens.access_token
            state.tokens.refresh_token = payload.tokens.refresh_token
            axios.defaults.headers.common['Authorization'] = payload.tokens.access_token
        },
        setUser(state, payload) {
            console.log(payload)
            state.user = payload.user
        },
        deleteCredentials(state) {
            Object.assign(state, defaultState());
            localStorage.clear();
        },
        setStatesData(state, states) {
            state.quiz_data.current_states = states;
            state.quiz_data.current_states_count = states.length;
        },
        setRandomState(state, task) {
            state.quiz_data.current_task_state = task;
        }
    },
    getters: {
        isLoggedIn(state) {
            return !!state.tokens.access_token;
        },

    },

});

new Vue({
    store,
    router,
    axios,
    render: h => h(App),
    data: {
        token: ""
    }
}).$mount('#app')