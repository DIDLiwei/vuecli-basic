import Vue from 'vue'
import App from './App.vue'
// import Users from './components/Users.vue'

Vue.config.productionTip = false

// 全局注册组件
// Vue.component("Users", Users);

new Vue({
    render: h => h(App),
}).$mount('#app')