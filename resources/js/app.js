/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
Vue.use(VueRouter);

// Vue Router
const router = new VueRouter({
    routes,
    mode: 'history',
  })

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('card-navigation', require('./components/common/CardNavigation.vue').default);
Vue.component('side-navigation', require('./components/common/SideNavigation.vue').default);
Vue.component('Toast', require('./components/common/Toast.vue').default);
Vue.component('Alert', require('./components/common/Alert.vue').default);
Vue.component('user-avatar', require('./components/common/Avatar.vue').default);

Vue.component('inquiry-form', require('./components/inquiries/InquiryForm.vue').default);
Vue.component('contact-form', require('./components/common/ContactForm.vue').default);
Vue.component('place-order', require('./components/common/PlaceOrder.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
});
