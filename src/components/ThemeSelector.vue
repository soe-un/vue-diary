<template>
  <div class="flex gap-2 items-center text-sm">
    <span>🎨 테마:</span>
    <select
      v-model="themeStore.theme"
      class="border rounded px-2 py-1 bg-white text-gray-800"
    >
      <option value="summer">🌤️ 여름</option>
      <option value="dark">🌙 다크</option>
      <option value="spring">🌸 봄</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useThemeStore } from "../stores/theme";
const themeStore = useThemeStore();

const themeClass = computed(() => {
  switch (themeStore.theme) {
    case "summer":
      return "bg-white text-gray-800 border-l-sky-300 hover:bg-sky-50";
    case "dark":
      return "bg-gray-800 text-gray-100 border-l-gray-600 hover:bg-gray-700";
    case "spring":
      return "bg-green-100 text-green-900 border-l-green-400 hover:bg-green-50";
    default:
      return "";
  }
});
</script>
