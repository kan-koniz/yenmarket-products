<script setup lang="ts">
defineProps({
  products: {
    type: Array as () => IProduct[],
    required: true,
  },
  path: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click="() => $router.push(`${path}/${product.slug}`)"
    />
  </div>
</template>
