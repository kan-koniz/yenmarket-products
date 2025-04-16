<script setup lang="ts">
definePageMeta({
  layout: 'product',
});

const route = useRoute();

const getProductSlug = () => {
  const levels = route.path.split('/');

  return levels[levels.length - 1];
};

const runtimeConfig = useRuntimeConfig();
const { baseUrl } = runtimeConfig.public;
const { data } = useAsyncData<IProduct>(getProductSlug(), () => {
  return $fetch(`${baseUrl}/api/products/${getProductSlug()}`, {
    method: 'GET',
  });
});
</script>

<template>
  <div>
    <div
      v-if="data"
      class="px-20 mt-6 flex items-stretch justify-baseline gap-4"
    >
      <NuxtImg :src="data.image" :alt="data.name" />

      <div>
        <p>
          Status: <span class="text-green-400">{{ data.status }}</span>
        </p>
        <p>
          Group: <span class="text-green-400">{{ data.categorySlug }}</span>
        </p>

        <hr class="my-2" />

        <p class="text-[var(--p-primary)]">
          Price: <span class="font-semibold">{{ data.price }}</span
          >/<span>{{ data.unit }}</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
