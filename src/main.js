import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import {BootstrapVue} from 'bootstrap-vue'

import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueAxios);

new Vue({
    router,
    axios,
    render: h => h(App),
    data: {
        token: ""
    }
}).$mount('#app')
