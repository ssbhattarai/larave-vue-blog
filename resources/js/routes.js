import Dashboard from './components/Dashboard.vue';
import Category from './components/Category.vue';
import CategoryCreate from './components/Category-Create.vue';

export const routes = [
    {
        path:'/',
        component:Dashboard
    },
    {
        path:'/category',
        component:Category
    },
    { 
        path:'/category-create',
        component:CategoryCreate
    },
 
 
];