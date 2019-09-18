import Dashboard from './components/Dashboard.vue';
import Promo from './components/Promo.vue';

const routes = [
    { path: '/', component: Dashboard, name: 'dashboard' },
    { path: '/promo', component: Promo, name: 'promo' }
];

export default routes;