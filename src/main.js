import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import routes from './routes';

// materializeCss
import 'materialize-css/dist/css/materialize.css';
import 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
    el: '#app',
    render: h => h(App),
    router
});