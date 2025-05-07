import { authorizedFetch } from "./api";

export async function get<T>(endpoint: string): Promise<T> {
  try {
    const res = await authorizedFetch(endpoint);

    if (!res.ok) {
      throw new Error(`GET ${endpoint} failed: ${res.status}`);
    }

    const data = await res.json();
    return data as T;
  } catch (error) {
    console.error("GET error:", error);
    throw error;
  }
}
