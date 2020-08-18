/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-component', require('./components/Main.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from './components/Main.vue'
import Dashboard from './components/Dashboard.vue'
import Category from './components/Category.vue'
import CategoryCreate from './components/Category-Create.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/home/category',
            name: 'category',
            component: Category,
        },
        {
            path: '/home/create-category',
            name: 'category-create',
            component: CategoryCreate,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { Dashboard },
    router,
});