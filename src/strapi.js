import { reactive } from "vue";

const API_BASE = "https://sodrarada.dh.gu.se/api/";

export async function find(route, params = {}) {
  params = new URLSearchParams(params);
  const response = await fetch(`${API_BASE}${route}?${params}`);
  return await response.json();
}

export function remoteCollection(route, params) {
  const collection = reactive([]);
  find(route, params).then((items) => collection.push(...items));
  return collection;
}

export function remoteObject(route) {
  const collection = reactive({});
  find(route).then((item) => Object.assign(collection, item));
  return collection;
}
