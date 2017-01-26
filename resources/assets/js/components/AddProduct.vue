<template>
    <div class="wrapper">
        <form class="form-signin" v-on:submit.prevent="addProduct()">
            <h2 class="form-signin-heading text-center">{{ msg }}</h2>
            <input type="text" class="form-control" name="name" placeholder="Product Name" required=""
                   autofocus=""/><br>
            <input type="text" class="form-control" name="price" placeholder="Price" required=""
                   autofocus=""/><br>
            <textarea class="form-control" name="description" placeholder="Description"></textarea><br>
            <button class="btn btn-lg btn-primary btn-block" type="submit">ADD</button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'Add Product'
            }
        },
        methods:{
            addProduct(){
                console.log("Add Record");
            }
        }
    }

</script>
