<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title style="text-align:center">
          Product Catalog
          <q-icon name="shopping_cart"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <Product />
    </q-page-container>
  </q-layout>
</template>

<script>
import Product from './components/Product.vue'
export default {
  name: 'LayoutDefault',

  components: {
    Product
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
