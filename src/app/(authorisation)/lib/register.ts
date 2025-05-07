// /lib/register.ts
import Cookies from "js-cookie";

const REGISTER_URL = "https://pokemons.free.beeceptor.com/auth/register";

type AuthCredentials = {
  login: string;
  password: string;
};

export async function register(credentials: AuthCredentials) {
  console.log("Sending credentials to register:", credentials);

  try {
    const res = await fetch(REGISTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      console.error("Registration failed:", res.status);
      return false;
    }

    const data = await res.json();
    console.log("Register response:", data);

    const authToken = data.auth_token;
    const refreshToken = data.refresh_token;

    if (typeof authToken !== "string" || typeof refreshToken !== "string") {
      console.warn("Invalid token structure. Using mock tokens instead.");
      Cookies.set("authToken", "mock-auth-token", {
        expires: 1 / 24,
        path: "/",
      });
      Cookies.set("refreshToken", "mock-refresh-token", {
        expires: 72000 / 86400,
        path: "/",
      });
    } else {
      Cookies.set("authToken", authToken, { expires: 1 / 24, path: "/" });
      Cookies.set("refreshToken", refreshToken, {
        expires: 72000 / 86400,
        path: "/",
      });
    }

    return true;
  } catch (error) {
    console.error("Registration error:", error);
    return false;
  }
}
