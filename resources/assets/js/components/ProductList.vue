<template>
    <div class="wrapper">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='product in products'>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
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
        }
    }

</script>
