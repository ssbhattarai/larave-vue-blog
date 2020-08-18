import Dashboard from './components/Dashboard.vue';
import Category from './components/Category.vue';
import CategoryCreate from './components/Category-Create.vue';
import CategoryUpdate from './components/categoryUpdate.vue';

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
        path:'/create-category',
        component:CategoryCreate
    },    
    {   
        path:'/category/:id',
        name: 'updateCategory',
        component: CategoryUpdate
    },
 
 
];