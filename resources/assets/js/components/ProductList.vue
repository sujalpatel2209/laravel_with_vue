<template>
    <div class="wrapper">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th colspan="2" style="text-align:center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='product in products'>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td style="text-align:center"><a @click = "deleteProduct()" href="#"><button class='btn btn-danger'>Delete</button></a></td>
                <td style="text-align:center"><a href="#"><button class='btn btn-primary'>Update</button></a></td>
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
            deleteProduct(){
                this.$http.get('/api/products/')
            }
        }
    }

</script>
