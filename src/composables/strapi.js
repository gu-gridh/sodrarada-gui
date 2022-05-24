import { reactive, watchEffect } from "vue";
import useStore from "@/store";

const API_BASE = "https://sodrarada.dh.gu.se/api/";

export async function find(route, params = {}) {
  params = new URLSearchParams(params);
  const response = await fetch(`${API_BASE}${route}?${params}`);
  return await response.json();
}

export default function useStrapi() {
  const store = useStore();

  function remoteCollection(route, params = {}) {
    const collection = reactive([]);

    // Make request and repeat whenever the keyword filter changes.
    (async () => {
      const items = await find(route, params);
      collection.push(...items);
    })();

    return collection;
  }

  function remoteFilteredCollection(route, params = {}) {
    const collection = reactive([]);

    // Make request and repeat whenever the keyword filter changes.
    watchEffect(async () => {
      if (store.keywordFilter) {
        params["keywords.id"] = store.keywordFilter;
      }
      collection.splice(0);
      const items = await find(route, params);
      console.log(items);
      collection.push(...items);
    });

    return collection;
  }

  function remoteObject(route) {
    const collection = reactive({});
    find(route).then((item) => Object.assign(collection, item));
    return collection;
  }

  return {
    remoteCollection,
    remoteFilteredCollection,
    remoteObject,
  };
}
