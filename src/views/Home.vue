<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">📅 나의 일기</h2>

    <button
      class="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-4 py-2 rounded mb-6 shadow"
      @click="router.push('/edit/new')"
    >
      ✍️ 새 일기 쓰기
    </button>

    <ul class="space-y-4">
      <li
        v-for="d in diaryStore.diaries"
        :key="d.id"
        :class="[
          'rounded-xl shadow-md p-4 border-l-4 cursor-pointer transition',
          themeClass,
        ]"
        @click="goToDiary(d.id)"
      >
        <p class="text-sm opacity-70">{{ d.date }}</p>
        <p class="text-lg font-semibold">{{ d.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDiaryStore } from "../stores/diary";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useThemeStore } from "../stores/theme";

const diaryStore = useDiaryStore();
const router = useRouter();
const themeStore = useThemeStore();

function goToDiary(id: number) {
  router.push(`/diary/${id}`);
}

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
