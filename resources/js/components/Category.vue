<template>

    <div class="container table-responsive">
        <h1 style="float:left">Category</h1>
         <router-link to="/create-category"><button type="button" class="btn btn-success float-right">Add new</button></router-link>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                <th scope="col">id</th>
                <th scope="col">Category</th>
                <th scope="col">Created by</th>
                <th scope="col">Created at</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="category in categories" :key="category.id">
                <tr>
                <th scope="row">{{category.id}}</th>
                <td>{{ category.category_name }}</td>
                <td>{{ category.created_by }}</td>
                <td>{{ category.created_at  | formatDate }}</td>
                <td>
                    <router-link :to="{name: 'updateCategory', params: { id: category.id }}"><button type="button" class="btn btn-success">Edit</button></router-link>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>

export default {
    data(){
        return{
            categories: {},
            
        }
    },
    methods: {
        loadCategories(){
            axios.get('api/category').then(
                data =>{console.log(data.data);
                        this.categories = data.data;
                    }
            )
        },

    },
    created(){
        this.loadCategories();
        console.log("Category is bebing rendered");
    }

}
</script>