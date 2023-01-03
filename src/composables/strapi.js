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
  const data = (await response.json()).data;
  if (Array.isArray(data)) {
    return data.map(transformItem)
  }
  else {
    console.log(transformItem(data))
    return transformItem(data)
  }
}

function transformItem({ id, attributes }) {
  for (const prop in attributes) {
    if (attributes[prop] && attributes[prop].data !== undefined) {
      attributes[prop] = attributes[prop].data && transformItem(attributes[prop].data)
    }
  }
  return ({ id, ...attributes })
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
        paramsFiltered["filters[keywords][id][$eq]"] = store.keywordFilter;
      }
      collection.splice(0);
      const items = await find(route, paramsFiltered);
      collection.push(...items);
    });

    return collection;
  }

  function remoteObject(route, params = {}) {
    const collection = reactive({});
    find(route, params).then((item) => Object.assign(collection, item));
    return collection;
  }

  return {
    remoteCollection,
    remoteFilteredCollection,
    remoteObject,
  };
}
