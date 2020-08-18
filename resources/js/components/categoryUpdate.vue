<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="font-weight-bold">Update Category</h1>
            </div>
            <!-- editMode ? updateUser() : createUser() -->
        <div class="card-body">
            <div class="alert alert-danger" role="alert" v-if="this.validateError">
                A simple danger alert—check it out!
            </div>

            <form class="container" @submit.prevent="createCategory()" method="post">
        <div class="form-group">
            <label for="Category">Category</label>
            <input type="text" class="form-control" v-model="category.category_name" id="Category" name="category"
                
            >
            <!-- :class="{ 'is-invalid': form.errors.has('category_name') }" -->
            <!-- <has-error :form="category" field="category_name"></has-error> -->
        </div>
            <button type="submit" class="btn btn-primary align-content-center">Submit</button>
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
            validateError: '',
            category: {
                category_name: ''
            },
            errors: null
        }
    }, 
    methods: {
        formValidation(){
            if(this.category.category_name = ''){
                validateError = 'Category must have a name';
            }
        },


        createCategory(e){
            // e.preventDefault()x
            axios.post('api/category', this.category).then( (response) => {
                console.log(response);
                this.$router.push('/category')
            }
            ).catch((error) =>{
                console.log(error);
            }
            )
        },
    },
    created(){
        this.formValidation();
    }

}
</script>