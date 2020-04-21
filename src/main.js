import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from "../src/components/Index"
import AddSmoothie from "@/components/AddSmoothie"
import EditSmoothie from "@/components/EditSmoothie"
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { name: 'Index', path: '/', component: Index },
  { name: 'AddSmoothie', path: '/add-smoothie', component: AddSmoothie },
  { name: 'EditSmoothie', path: '/edit-smoothie/:smoothie_slug', component: EditSmoothie }

];


const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
