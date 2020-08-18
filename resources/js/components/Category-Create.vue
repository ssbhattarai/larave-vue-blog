<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="font-weight-bold">Create Category</h1>
            </div>
            <!-- editMode ? updateUser() : createUser() -->
        <div class="card-body">
            <form class="container" @submit.prevent="createCategory()" method="post">
        <div class="form-group">
            <label for="Category">Category</label>
            <input type="text" class="form-control" v-model="category.category_name" id="Category" name="category"
                
            >
            <!-- :class="{ 'is-invalid': form.errors.has('category_name') }" -->
            <!-- <has-error :form="form" field="category_name"></has-error> -->
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            editMode: false,
            category: {
                category_name: ''
            },
        }
    }, 
    methods: {
        createCategory(e){
            // e.preventDefault()
            axios.post('api/category', this.category).then( (response) => {
                console.log(response);
                this.$router.push('/category')
            }
            ).catch((error) =>{
                console.log(error);
            }
            )
        },
    }

}
</script>