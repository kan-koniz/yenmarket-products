<script setup lang="ts">
defineProps({
  product: {
    type: Object as () => IProduct,
    required: true,
  },
});
</script>

<template>
  <div class="border border-gray-200 px-4 py-2 rounded-sm">
    <div class="h-60 overflow-hidden">
      <NuxtImg
        :src="product.image"
        :alt="product.name"
        width="244"
        height="244"
        loading="lazy"
        format="webp"
      />
    </div>
    <div class="mt-2">
      <h3 class="text-lg font-semibold h-8">{{ product.name }}</h3>
      <p class="text-red-600 mt-5">
        <span class="font-semibold">
          {{ Number(product.price).toLocaleString('vi-VN') }}
        </span>
        /<span class="capitalize">{{ product.unit }}</span>
      </p>
    </div>
  </div>
</template>
