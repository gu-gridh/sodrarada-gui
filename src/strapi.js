const API_BASE = "https://sodrarada.dh.gu.se/api/";

export async function find(route, params = {}) {
  params = new URLSearchParams(params);
  const response = await fetch(`${API_BASE}${route}?${params}`);
  return await response.json();
}
