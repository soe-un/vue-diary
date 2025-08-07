// src/stores/theme.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export type Theme = "summer" | "dark" | "spring";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<Theme>(
    (localStorage.getItem("theme") as Theme) || "summer"
  );

  watch(theme, (newTheme) => {
    localStorage.setItem("theme", newTheme);
  });

  function setTheme(newTheme: Theme) {
    theme.value = newTheme;
  }

  return { theme, setTheme };
});
