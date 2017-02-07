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
                <td style="text-align:center">
                    <button @click="deleteProduct(product.id)" class='btn btn-danger'>Delete</button>
                </td>
                <td style="text-align:center">
                    <button @click="getSingleRecord(product.id)" class='btn btn-primary' data-toggle="modal" data-target="#myModal">Update</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <form class="form-signin" method="post" @submit.prevent="updateProduct()">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Edit Product Detail</h4>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="id" v-model="product.id"/>
                            <!--<h2 class="form-signin-heading text-center">{{ msg }}</h2>-->
                            <input type="text" class="form-control" name="name" placeholder="Product Name" required=""
                                   autofocus="" v-model='product.name'/><br>
                            <input type="text" class="form-control" name="price" placeholder="Price" required=""
                                   autofocus="" v-model='product.price'/><br>
                            <textarea class="form-control" name="description" placeholder="Description"
                                      v-model='product.desc'></textarea><br>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" type="submit">Edit</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                products: [],
                product: {
                    id: '',
                    name: '',
                    price: '',
                    desc: ''
                }
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
                this.$http.delete('/api/products/'+id)
                    .then(function(result){
                        //console.log(result);
                        console.log("Delete Successfully");
                        this.$router.go('/productlist')
                    })
            },
            getSingleRecord(id){
                this.$http.get('/api/products/'+id, this.product)
                    .then(response => {
                        this.product.id = response.body[0].id;
                        this.product.name = response.body[0].name;
                        this.product.price = response.body[0].price;
                        this.product.desc = response.body[0].description;
                    })
            }
        }
    }




</script>
