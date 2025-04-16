<script setup lang="ts">
const route = useRoute();
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

const activeBreadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean);
  const breadcrumbs: {
    label: string;
    route: string;
    isFirst: boolean;
    isLast: boolean;
  }[] = [];

  const buildBreadcrumbs = (items: any[], basePath = '') => {
    for (const item of items) {
      const currentPath = `${basePath}/${item.slug}`;
      if (pathSegments.includes(item.slug)) {
        breadcrumbs.push({
          label: item.label,
          route: currentPath,
          isFirst: false,
          isLast: false,
        });
      }

      if (item.items) {
        buildBreadcrumbs(item.items, currentPath);
      }
    }
  };

  buildBreadcrumbs(menu.value);

  const lastSegment = pathSegments[pathSegments.length - 1];
  const alreadyIncluded = breadcrumbs.some((b) =>
    b.route.endsWith(`/${lastSegment}`)
  );

  if (!alreadyIncluded && lastSegment) {
    const fullPath = '/' + pathSegments.join('/');
    breadcrumbs.push({
      label: lastSegment,
      route: fullPath,
      isFirst: false,
      isLast: false,
    });
  }

  if (breadcrumbs.length > 0) {
    breadcrumbs[0].isFirst = true;
    breadcrumbs[breadcrumbs.length - 1].isLast = true;
  }

  return breadcrumbs;
});
</script>

<template>
  <div>
    <header class="bg-white sticky top-0 z-50">
      <div class="lg:px-20 py-2 flex items-center justify-between">
        <NuxtLink to="/"><NuxtImg src="/images/logo.png" /></NuxtLink>

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

    <Breadcrumb :model="activeBreadcrumbs" class="border-b border-gray-200">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span
              :class="[
                'py-2',
                {
                  'pl-22': item.isFirst,
                  'text-[var(--p-primary)] font-semibold': item.isLast,
                },
              ]"
            >
              {{ item.label }}
            </span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0">
            {{ item.label }}
          </span>
        </a>
      </template>
    </Breadcrumb>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
