
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './components/App.vue';
import Home from './components/Home.vue';
import UserList from './components/UserList.vue';

const router = new VueRouter({
    routes:[
       {
           path: '/home',
           component: Home
       },
       {
           path: '/userlist',
           component: UserList
       }
    ]
});

const app = new Vue({
    el: '#app',
    render: h => h(App), // First Component Name
    router
});
