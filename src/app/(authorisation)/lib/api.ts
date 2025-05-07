import Cookies from "js-cookie";
import { refreshToken } from "./refresh";

export async function authorizedFetch(url: string, options: RequestInit = {}) {
  let token = Cookies.get("authToken");

  if (!token) {
    try {
      token = await refreshToken();
    } catch {
      throw new Error("Unauthorized");
    }
  }

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });
}
