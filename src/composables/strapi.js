import { reactive, watchEffect } from "vue";
import useStore from "@/store";

const API_BASE = "https://sodrarada.dh.gu.se/api/";

export async function find(route, params = {}) {
  const urlParams = new URLSearchParams();
  // {a: [b, c]} => a_in=b&a_in=c
  Object.keys(params).forEach((key) =>
    Array.isArray(params[key])
      ? params[key].forEach((value) => urlParams.append(`${key}_in`, value))
      : urlParams.set(key, params[key])
  );
  const response = await fetch(`${API_BASE}${route}?${urlParams}`);
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
      const paramsFiltered = { ...params };
      if (store.keywordFilter) {
        paramsFiltered["keywords.id"] = store.keywordFilter;
      }
      collection.splice(0);
      const items = await find(route, paramsFiltered);
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
