<script setup lang="ts">
const router = useRouter();
const { categories } = useCategories();

const menu = computed(() => {
  return [
    {
      label: 'Promotion',
      slug: 'promotion',
      command: () => router.push('/promotion'),
    },
    {
      label: 'Our Products',
      slug: 'our-products',
      items: [
        ...(categories.value?.map((category) => ({
          label: category.name,
          slug: category.slug,
          items: category.subcategories.map((subcategory) => ({
            label: subcategory.name,
            slug: subcategory.slug,
            command: () =>
              router.push(`/our-products/${category.slug}/${subcategory.slug}`),
          })),
        })) ?? []),
      ],
    },
    {
      label: 'Yen Market Menu',
      slug: 'yen-market-menu',
      items: [
        {
          label: "Yen's Kitchen",
          slug: 'yens-kitchen',
          command: () => router.push('/yen-market-menu/yens-kitchen'),
        },
      ],
    },
    {
      label: 'Seasonal',
      slug: 'seasonal',
      items: [
        {
          label: 'Lunar New Year',
          slug: 'lunar-new-year',
          command: () => router.push('/seasonal/lunar-new-year'),
        },
      ],
    },
  ];
});
</script>

<template>
  <div>
    <header class="bg-white sticky top-0 z-50">
      <div class="lg:px-20 py-2 flex items-center justify-between">
        <NuxtImg src="/images/logo.png" />

        <SearchInput />

        <div class="flex items-center gap-4">
          <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
          <LanguageSelector />
        </div>
      </div>

      <div class="bg-[var(--p-primary)] flex items-center px-20">
        <LazyMenubar
          v-if="menu"
          :model="menu"
          breakpoint="400px"
          :pt="{
            rootlist: {
              class: 'text-white',
            },
            submenu: {
              class: '!bg-slate-50 !text-black',
            },
            item: {
              class: 'hover:backdrop-brightness-90 px-2',
            },
            itemlabel: {
              class: 'px-1 h-12 flex items-center',
            },
          }"
        />
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
