<template>
  <div :class="['p-6 rounded-xl shadow-md max-w-2xl mx-auto', themeClass]">
    <h2 class="text-2xl font-bold mb-4">
      {{ isEdit ? "✏️ 일기 수정" : "📝 새 일기 쓰기" }}
    </h2>

    <form @submit.prevent="saveDiary" class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">제목</label>
        <input
          v-model="title"
          type="text"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-medium">내용</label>
        <textarea
          v-model="content"
          rows="6"
          class="w-full border rounded px-3 py-2"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded shadow"
      >
        저장하기
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDiaryStore } from "../stores/diary";
import { useThemeStore } from "../stores/theme";

const route = useRoute();
const router = useRouter();
const diaryStore = useDiaryStore();
const themeStore = useThemeStore();

const isEdit = route.params.id !== "new";
const diaryId = Number(route.params.id);

const diary = diaryStore.diaries.find((d) => d.id === diaryId);

const title = ref(diary?.title || "");
const content = ref(diary?.content || "");

function saveDiary() {
  if (isEdit) {
    diaryStore.updateDiary(diaryId, {
      title: title.value,
      content: content.value,
    });
  } else {
    diaryStore.addDiary({
      title: title.value,
      content: content.value,
    });
  }
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
