import { createRouter, createWebHistory } from "vue-router";
import {HomePage, ProductDetails,ProductsPage} from '../views' 

const  routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/products',
        name: 'products-page',
        component: ProductsPage
    },
    {
        path: '/products/:productId',
        name: 'product-details',
        component: ProductDetails,
        props: true, // allows route params to be passed as component props
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    })

export default  router