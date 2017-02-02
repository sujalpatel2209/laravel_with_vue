<template>
    <div class="wrapper">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th colspan="2" style="text-align:center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='product in products'>
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td style="text-align:center"><button @click="deleteProduct(14)" class='btn btn-danger'>Delete</button></td>
                <td style="text-align:center"><button class='btn btn-primary'>Update</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                products: [],
                count : 0
            }
        },
        created() {
            this.$http.get('/api/products')
                .then(response => {
                    this.products = response.body
                })
        },
        methods:{
            deleteProduct(id){
                this.$http.get('/api/products/'+id)
                    .then(function(result){
                        console.log(result);
                    })
            }
        }
    }

</script>
