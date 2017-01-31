<template>
    <div class="wrapper">
        <form class="form-signin" method="post" @submit.prevent = "addProduct()">
            <!--<h2 class="form-signin-heading text-center">{{ msg }}</h2>-->
            <input type="text" class="form-control" name="name" placeholder="Product Name" required=""
                   autofocus="" v-model = 'product.name'/><br>
            <input type="text" class="form-control" name="price" placeholder="Price" required=""
                   autofocus="" v-model = 'product.price'/><br>
            <textarea class="form-control" name="description" placeholder="Description" v-model = 'product.description'></textarea><br>
            <button class="btn btn-lg btn-primary btn-block" type="submit">ADD</button>
        </form>
        <br>
        <!--<table class="table table-bordered">
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
    </div>-->
</template>

<script>
    export default{
        data(){
            return{
                msg:'Add Product',
                products : [],
                product: {
                    name : '',
                    price : '',
                    description: ''
                }
            }
        },
        created(){
            this.$http.get('/api/products')
                .then(function(response){
                    console.log(response.body);
                    this.products = response.body;
                })
        },
        methods:{
            addProduct(){
                this.$http.post('/api/products',this.product)
                    .then(response => {
                        console.log("Insert Successfully");
                        this.product.name = '';
                        this.product.price = '';
                        this.product.description = '';
                    })
            }
        }
    }
</script>
