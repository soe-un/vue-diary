<template>
  <div :class="themeClass" class="min-h-screen flex flex-col transition-colors">
    <header class="p-4 shadow text-center">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold cursor-pointer" @click="goHome">
          📔 내 일기장
        </h1>
        <ThemeSelector />
      </div>
    </header>

    <main class="flex-1 p-4">
      <router-view />
    </main>

    <footer class="text-center text-sm p-2">© 2025 My Diary App</footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useThemeStore } from "./stores/theme";
import ThemeSelector from "./components/ThemeSelector.vue";
import { computed } from "vue";

const router = useRouter();
const themeStore = useThemeStore();

const themeClass = computed(() => {
  switch (themeStore.theme) {
    case "summer":
      return "bg-sky-100 text-gray-800";
    case "dark":
      return "bg-gray-900 text-white";
    case "spring":
      return "bg-green-50 text-green-900";
    default:
      return "";
  }
});

function goHome() {
  router.push("/");
}
</script>
