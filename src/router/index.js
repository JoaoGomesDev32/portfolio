import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';

const routes = [
    { path: '/', component: Hero },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;