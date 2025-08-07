<template>
  <div
    v-if="diary"
    :class="['p-6 rounded-xl shadow-md max-w-2xl mx-auto', themeClass]"
  >
    <h2 class="text-2xl font-bold mb-2">{{ diary.title }}</h2>
    <p class="text-sm opacity-70 mb-4">{{ diary.date }}</p>
    <p class="whitespace-pre-line mb-6">{{ diary.content }}</p>

    <div class="flex gap-4">
      <button
        class="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded shadow"
        @click="router.push(`/edit/${diary.id}`)"
      >
        ✏️ 수정
      </button>
      <button
        class="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded shadow"
        @click="deleteDiary"
      >
        🗑️ 삭제
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useDiaryStore } from "../stores/diary";
import { computed } from "vue";
import { useThemeStore } from "../stores/theme";

const route = useRoute();
const router = useRouter();
const diaryStore = useDiaryStore();
const themeStore = useThemeStore();

const diary = computed(() =>
  diaryStore.diaries.find((d) => d.id === Number(route.params.id))
);

function deleteDiary() {
  if (!diary.value) return;
  diaryStore.deleteDiary(diary.value.id);
  router.push("/");
}

const themeClass = computed(() => {
  switch (themeStore.theme) {
    case "summer":
      return "bg-white text-gray-800";
    case "dark":
      return "bg-gray-800 text-gray-100";
    case "spring":
      return "bg-green-50 text-green-900";
    default:
      return "";
  }
});
</script>
