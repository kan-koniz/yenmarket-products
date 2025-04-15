<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showMenu = ref(false);
const langLabel = ref('VI');

function setLang(lang: string) {
  langLabel.value = lang.toUpperCase();
  showMenu.value = false;
  console.log('Language set to:', lang);
}

const menuRef = ref<HTMLElement | null>(null);
const toggleRef = ref<HTMLElement | null>(null);

function handleClickOutside(e: MouseEvent) {
  const target = e.target as Node;
  if (!menuRef.value?.contains(target) && !toggleRef.value?.contains(target)) {
    showMenu.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative w-11 cursor-pointer">
    <button
      ref="toggleRef"
      @click="showMenu = !showMenu"
      class="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer"
    >
      <span>{{ langLabel }}</span>
      <svg
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      ref="menuRef"
      v-show="showMenu"
      class="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow min-w-32"
    >
      <button
        @click="setLang('vi')"
        class="block w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
      >
        🇻🇳 Tiếng Việt
      </button>
      <button
        @click="setLang('en')"
        class="block w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
      >
        🇬🇧 English
      </button>
    </div>
  </div>
</template>
