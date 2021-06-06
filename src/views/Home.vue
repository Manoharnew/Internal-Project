<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Product msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'Product',
  components: {
    Product
  }
}
</script>
