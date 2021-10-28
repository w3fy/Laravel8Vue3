import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import Books from '../components/Books';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'books',
        path: '/books',
        component: Books,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'addbook',
        path: '/books/add',
        component: AddBook,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'editbook',
        path: '/books/edit/:id',
        component: EditBook,
        meta: {
            requiresAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/";
        }
        next();
    }
    else {
        next(); // make sure to always call next()!
    }
});

export default router;
