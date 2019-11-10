import Vue from 'vue'
import Router from 'vue-router'
import Set from '../components/Set.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/page=:page',
            name: 'Set',
            component: Set
        }
    ]
})