<script setup lang="ts">
useSeoMeta({
  title: 'YenMarket',
  ogTitle: 'YenMarket',
  description: 'Premium groceries with authentic Japanese quality and care.',
  ogDescription: 'Premium groceries with authentic Japanese quality and care.',
  ogImage: 'https://yenmarket.vn/_nuxt/logo-brand.D-hX70gZ.png',
  twitterCard: 'summary_large_image',
});

const images = [
  {
    src: 'https://mastererp.mylifecompany.com/Resources/Images/banner%201.jpg',
    alt: 'Description for Banner 1',
  },
  {
    src: 'https://mastererp.mylifecompany.com/Resources/Images/Banner%208.jpg',
    alt: 'Description for Banner 2',
  },
];

const { result: fishAndSeafood } = useProducts(
  ref({ category: 'fish-and-seafood', limit: 8 })
);
const { result: frozenMeat } = useProducts(ref({ category: 'frozen-meat' }));
</script>

<template>
  <div>
    <Carousel :value="images" :autoplay-interval="4000">
      <template #item="slotProps">
        <NuxtImg
          :src="slotProps.data.src"
          :alt="slotProps.data.alt"
          loading="eager"
          format="webp"
          sizes="100vw"
        />
      </template>

      <template #previcon>
        <div />
      </template>
      <template #nexticon>
        <div />
      </template>
    </Carousel>

    <div class="flex flex-col gap-8 my-6 px-20">
      <div class="flex items-center justify-between gap-4">
        <div>
          <NuxtImg
            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_1.jpg?1724210132257"
            alt="Benefit 1"
            loading="lazy"
            format="webp"
            class="rounded-sm"
          />
        </div>

        <div>
          <NuxtImg
            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_2.jpg?1724210132257"
            alt="Benefit 2"
            loading="lazy"
            format="webp"
            class="rounded-sm"
          />
        </div>

        <div>
          <NuxtImg
            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_3.jpg?1724210132257"
            alt="Benefit 3"
            loading="lazy"
            format="webp"
            class="rounded-sm"
          />
        </div>
      </div>

      <NuxtImg
        src="https://mastererp.mylifecompany.com/Resources/Images/Object/Banner9114012025041546_S.jpg"
        alt="Overview"
        loading="lazy"
        format="webp"
        class="rounded-sm"
      />
    </div>

    <div class="px-20">
      <div v-if="fishAndSeafood?.data.length">
        <h2 class="text-2xl font-bold mb-4">Fish and Seafood</h2>
        <ProductList :products="fishAndSeafood.data" />
      </div>

      <div v-if="frozenMeat?.data.length" class="mt-6">
        <h2 class="text-2xl font-bold mb-4">Frozen Meat</h2>
        <ProductList :products="frozenMeat.data" />
      </div>
    </div>

    <Footer />
  </div>
</template>
