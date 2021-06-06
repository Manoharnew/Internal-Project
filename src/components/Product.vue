<template>
<q-page style="margin-top: 20px;">
  <div class="row">
    <div class="col-lg-8 col-md-8 col-sm6 col-xs-12">
      <div  style="text-align:end;">
        <div v-if="listview">
          <q-icon name="list" class="view" @click="hellomanu"
          style="font-size:40px; cursor:pointer"></q-icon>
        </div>
        <div v-else>
          <q-icon name="table_chart" class="view" @click="hellomanu"
          style="font-size:40px; cursor:pointer"></q-icon>
        </div>
      </div>
      <div>
      <div class="table" v-if="listview">
        <q-card class="q-pa-md">
          <q-table
        title="PRODUCTS"
        :data="Products"
        :columns="columns"
        row-key="name"
        separator="cell"
        >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="Product" :props="props">
              {{props.row.Product}}
            </q-td>
            <q-td key="Description" :props="props">
              {{props.row.Description}}
            </q-td>
            <q-td key="Price" :props="props">
              {{props.row.Price}}
            </q-td>
            <q-td>
              <q-btn color="primary" label="ADD TO CART" @click="addtocart(props.row)"/>
            </q-td>
          </q-tr>
        </template>
        </q-table>
        </q-card>
      </div>
      <div class="row" v-else>
      <div  class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-for="Item in Products" :key="Item.Product">
        <q-card class="Item-card" >
          <q-card-section>
            Product: <b>{{Item.Product}}</b>
          </q-card-section>
           <q-card-section>
            Description: <b>{{Item.Description}} </b>
          </q-card-section>
          <q-card-section>
           Price: <b>{{Item.Price}}</b>
          </q-card-section>
          <q-card-section>
            <q-btn color="primary" label="ADD TO CART" @click="addtocart(Item)" />
          </q-card-section>
        </q-card>
      </div>
      </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <h6 style="text-align:center;margin-top: 1px;">Cart
        <q-icon name="shopping_cart"/>
      </h6>
      <q-scroll-area :delay="1200" style="height: 340px; max-width: 415px;">
      <q-card class="cart-card" v-for="item in cart" :key="item.Product">
        <q-card-section>
            Product: <b>{{item.Product}}</b>
          </q-card-section>
           <q-card-section>
            Description: <b>{{item.Description}} </b>
          </q-card-section>
          <q-card-section>
           Price: <b>{{item.Price}}</b>
          </q-card-section>
          <q-card-section>
            Quantity:<b>{{item.count}}</b>
          </q-card-section>
          <q-card-section>
            TotalPrice: <b>{{item.totalPrice}}</b>
          </q-card-section>
          
          <q-card-section>
            <q-btn color="red" label="Remove Item" icon="delete" @click="removeitem(item)" />
          </q-card-section>
      </q-card>
      </q-scroll-area>
    </div>
  </div>
</q-page>
</template>

<style>
</style>

<script>
 import { mapState, mapGetters } from "vuex";
export default {
  name: 'Product',
  created(){
    this.$store.dispatch('addproducts'),
    this.$store.commit('SET_TO_CART',localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] )
  },
   computed:{
    ...mapState({
      Products:"Products",
      cart:"cart"
    }),
  },
  data(){
    return{
      listview:true,
       columns: [
        {
          name: 'Product',
          required: true,
          label: 'Product',
          align: 'center',
          field: row => row.Product,
          format: val => `${val}`,
          sortable: true,
         
        },
        { name: 'Description', align: 'center', label: 'Description', field: 'Description', sortable: true ,button:''},
        { name: 'Price', align: 'center', label: 'Price', field: 'Price', sortable: true, },
        { name: '', align: 'center', label: '', field: '',},
       ]
    }
  },
  methods:{
     hellomanu(){ 
       this.listview = !this.listview
      },
      addtocart(obj){
        console.log("object",obj)
        this.$store.dispatch('addtocart',{this:this,obj:obj})
      },
      removeitem(obj){
        this.$store.dispatch('removeitem',{this:this,obj:obj})
      }
      
  }
}
</script>
<style >
.table{
  margin-left: 15px;
}
.Item-card{
  margin-left: 15px;
  margin-bottom: 30px;
}
.cart-card{
    margin-left: 10px;
    margin-right: 10px ;
    margin-bottom: 10px;
}
</style>
