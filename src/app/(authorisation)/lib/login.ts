import Cookies from "js-cookie";

const LOGIN_URL = "https://pokemons.free.beeceptor.com/auth/login";

export async function login(credentials: { login: string; password: string }) {
  console.log("Sending credentials to login:", credentials);

  try {
    const res = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: credentials.login,
        password: credentials.password,
      }),
    });

    if (!res.ok) {
      console.error("Login failed:", res.status);
      return false;
    }

    const data = await res.json();
    console.log("Login response:", data);

    Cookies.set("authToken", data.auth_token, { maxAge: 3600, path: "/" });
    Cookies.set("refreshToken", data.refresh_token, {
      maxAge: 72000,
      path: "/",
    });

    return true;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}
