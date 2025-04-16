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
            src="/images/banner_1.png"
            alt="Benefit 1"
            loading="lazy"
            format="webp"
            class="rounded-sm"
          />
        </div>

        <div>
          <NuxtImg
            src="/images/banner_2.png"
            alt="Benefit 2"
            loading="lazy"
            format="webp"
            class="rounded-sm"
          />
        </div>

        <div>
          <NuxtImg
            src="/images/banner_3.png"
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
        <ProductList
          :products="fishAndSeafood.data"
          path="/our-products/fresh-food/fish-and-seafood"
        />
        <div class="mt-4 flex items-center justify-between gap-4">
          <hr class="flex-grow border-t border-gray-300" />
          <div class="w-24">
            <button
              class="bg-red-700 text-white px-6 py-2 cursor-pointer whitespace-nowrap rounded-4xl hover:bg-red-800 transition duration-300 ease-in-out"
              @click="$router.push('/our-products/fresh-food/fish-and-seafood')"
            >
              See all
            </button>
          </div>
          <hr class="flex-grow border-t border-gray-300" />
        </div>
      </div>

      <div v-if="frozenMeat?.data.length" class="mt-6">
        <h2 class="text-2xl font-bold mb-4">Frozen Meat</h2>
        <ProductList
          :products="frozenMeat.data"
          path="/our-products/fresh-food/frozen-meat"
        />

        <div class="mt-4 flex items-center justify-between gap-4">
          <hr class="flex-grow border-t border-gray-300" />
          <div class="w-24">
            <button
              class="bg-red-700 text-white px-6 py-2 cursor-pointer whitespace-nowrap rounded-4xl hover:bg-red-800 transition duration-300 ease-in-out"
              @click="$router.push('/our-products/fresh-food/frozen-meat')"
            >
              See all
            </button>
          </div>
          <hr class="flex-grow border-t border-gray-300" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
