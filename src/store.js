import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => ({
    keywordFilter: null,
  }),
  actions: {
    filterByKeywordId(keywordId) {
      this.keywordFilter = keywordId;
    },
  },
});
