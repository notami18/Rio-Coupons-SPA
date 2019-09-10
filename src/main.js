import Vue from 'vue';
import App from './App.vue';

// materializeCss
import 'materialize-css/dist/css/materialize.css';
import 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';

new Vue({
    el: '#app',
    render: h => h(App)
})