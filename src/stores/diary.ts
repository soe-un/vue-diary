import moment from "moment";
import { defineStore } from "pinia";

export interface Diary {
  id: number;
  date: string;
  title: string;
  content: string;
}

export const useDiaryStore = defineStore("diary", {
  state: () => ({
    diaries: [] as Diary[],
  }),
  actions: {
    addDiary(diary: { title: string; content: string }) {
      this.diaries.push({
        ...diary,
        id: this.diaries.length,
        date: moment().format("YYYY-MM-DD"),
      });
      this.saveToStorage();
    },
    updateDiary(id: number, updated: { title: string; content: string }) {
      const idx = this.diaries.findIndex((d) => d.id === id);
      if (idx !== -1) {
        this.diaries[idx] = {
          ...updated,
          id: idx,
          date: this.diaries[idx].date,
        };
        this.saveToStorage();
      }
    },
    deleteDiary(id: number) {
      this.diaries = this.diaries.filter((d) => d.id !== id);
      this.saveToStorage();
    },
    loadFromStorage() {
      const data = localStorage.getItem("diaries");
      if (data) this.diaries = JSON.parse(data);
    },
    saveToStorage() {
      localStorage.setItem("diaries", JSON.stringify(this.diaries));
    },
  },
});
