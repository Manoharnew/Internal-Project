import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Products:[
      {Product:'Watch',Description:'A Beautiful Rado Watch',Price:10,Availbility:4},
      {Product:'Mobile',Description:'A Beautiful Iphone Mobile',Price:1000,Availbility:5},
      {Product:'Speaker',Description:'A Beautiful Speaker ',Price:2000,Availbility:7},
    ],
    cart:[]
  },
  mutations: {
    SET_PRODUCTS(state,Products){
      state.Products = Products
    },
    SET_TO_CART(state,cart){
      state.cart = cart
    }
  },
  actions: {
    addproducts({commit,state},This){
      localStorage.setItem('Products',JSON.stringify(state.Products))
    },
    addtocart({commit,state},This){
      console.log("Item",This.obj)
        const existingItem = state.cart.find(item =>
          item.Product == This.obj.Product
          )
          console.log("existingItem",existingItem)
          state.cart.map(obj=>{
            if(obj.Product == This.obj.Product){
              if(obj.count < This.obj.Availbility){
              obj.totalPrice += This.obj.Price
              obj.count += 1;
            }
            else{
              console.log("validated")
              alert("cart limit exceeded on this product")
            }
          }
          })
          if(!existingItem){
            state.cart.push({
              Product:This.obj.Product,
              Description:This.obj.Description,
              Price:This.obj.Price,
              totalPrice:This.obj.Price,
              count:1
            
            })
          }
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    removeitem({commit,state},This){
      console.log("removedobj",This.obj)
      if(This.obj.count > 1){
        This.obj.totalPrice = This.obj.totalPrice - This.obj.Price
        This.obj.count = This.obj.count - 1;
      }
      else{
          state.cart= state.cart.filter(obj =>{
            return obj.Product != This.obj.Product
          })
      }
      localStorage.setItem("cart",JSON.stringify(state.cart))
    }
  },
  modules: {
  }
})
