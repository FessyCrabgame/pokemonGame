import Cookies from "js-cookie";

const REFRESH_URL = "https://pokemons.free.beeceptor.com/auth/refresh";

export async function refreshToken() {
  try {
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const res = await fetch(REFRESH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!res.ok) {
      console.error("Token refresh failed:", res.status);
      throw new Error("Token refresh failed");
    }

    const data = await res.json();
    console.log("Refresh token response:", data);

    const newAuthToken = data.auth_token;
    const newRefreshToken = data.refresh_token;

    Cookies.set("authToken", newAuthToken, { maxAge: 3600, path: "/" });
    Cookies.set("refreshToken", newRefreshToken, { maxAge: 72000, path: "/" });

    return newAuthToken;
  } catch (error) {
    console.error("Refresh token error:", error);
    throw new Error("Failed to refresh token");
  }
}
