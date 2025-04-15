<script setup lang="ts">
const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div>
    <LoadingScreen v-if="loading" />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
