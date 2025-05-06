const BASE_URL = "https://localhost:7298";

export async function apiRequest(url, options = {}) {
  // Prepend base URL if url is relative
  const fullUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const response = await fetch(fullUrl, options);
  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }
  if (!response.ok) {
    throw new Error((data && data.message) || "API request failed");
  }
  return data;
}
