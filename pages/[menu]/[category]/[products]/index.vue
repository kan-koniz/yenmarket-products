<script setup lang="ts">
definePageMeta({
  layout: 'product',
});

const route = useRoute();

const getCategorySlug = () => {
  const levels = route.path.split('/');

  return levels[levels.length - 1];
};

const page = ref(1);
const limit = ref(10);
const fields = ref('');
const filter = ref({
  category: getCategorySlug(),
  page: page.value,
  limit: limit.value,
  fields: fields.value,
});
const { result } = useProducts(filter);

const selectedSort = ref('');

const computedProducts = computed(() => {
  if (result.value?.data) {
    const products = [...result.value.data];

    switch (selectedSort.value) {
      case 'az':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'za':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price);
      case 'newest':
        return products;
      case 'oldest':
        return products.reverse();
      default:
        return products;
    }
  }

  return [];
});
</script>

<template>
  <div>
    <div class="px-20">
      <NuxtImg src="/images/product_banner.png" format="webp" class="w-full" />

      <div class="border-t border-b border-gray-200 mt-4">
        <div class="flex items-center flex-wrap gap-4 py-3">
          <span class="font-semibold text-gray-800">Sắp xếp:</span>

          <label class="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              value="az"
              v-model="selectedSort"
              class="accent-red-600 border-red-600"
            />
            <span>A -&gt; Z</span>
          </label>

          <label class="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              value="za"
              v-model="selectedSort"
              class="accent-red-600 border-red-600"
            />
            <span>Z -&gt; A</span>
          </label>

          <label class="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              value="price-asc"
              v-model="selectedSort"
              class="accent-red-600 border-red-600"
            />
            <span>Giá tăng dần</span>
          </label>

          <label class="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              value="price-desc"
              v-model="selectedSort"
              class="accent-red-600 border-red-600"
            />
            <span>Giá giảm dần</span>
          </label>

          <label class="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              value="newest"
              v-model="selectedSort"
              class="accent-red-600 border-red-600"
            />
            <span>Mới nhất</span>
          </label>

          <label class="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              value="oldest"
              v-model="selectedSort"
              class="accent-red-600 border-red-600"
            />
            <span>Cũ nhất</span>
          </label>
        </div>
      </div>

      <ProductList
        v-if="computedProducts.length"
        :products="computedProducts"
        :path="route.path"
        class="mt-4"
      />
    </div>

    <Footer />
  </div>
</template>
