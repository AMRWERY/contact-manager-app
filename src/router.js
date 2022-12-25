import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './ui/HomePage.vue';
import ContactManger from './components/ContactManger.vue';
import AddContact from './components/AddContact.vue';
import EditContact from './components/EditContact.vue';
import ViewContact from './components/ViewContact.vue';
import NotFound from './ui/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'HomePage', redirect: '/contacts', component: HomePage },
        { path: '/contacts', name: 'ContactManger', component: ContactManger },
        { path: '/contact/add', name: 'AddContact', component: AddContact },
        { path: '/contact/edit/:contactId', name: 'EditContact', component: EditContact },
        { path: '/contact/view/:contactId', name: 'ViewContact', component: ViewContact },
        { path: '/:notFound(.*)', name: 'NotFound', component: NotFound },
    ]
});

export default router;