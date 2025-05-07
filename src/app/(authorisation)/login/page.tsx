"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../lib/login";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from './login.module.css';

const LoginPage = () => {
  const pathname = usePathname();
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await login({ login: loginInput, password });

    if (success) {
      router.push("/");
    } else {
      setError("Неверный логин или пароль.");
    }
  };

  return (
    <form onSubmit={handleLogin} className={css.form}>
      <div>
        <div className={css.logoBlock}>
          <Image
            src="/images/image 1.png"
            alt="Покемон"
            width={149}
            height={54}
            priority
          />
          <span className={css.separator}></span>
          <Image
            src="/images/Clicker-12-14-2023 (3) 1.png"
            alt="Кликер"
            width={153}
            height={54}
            priority
          />
        </div>
        <div className={css.card}>
          <div className={css.nav}>
            <Link
              href="/registration"
              className={`${css.link} ${pathname === "/registration" ? css.active : ""}`}
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className={`${css.link} ${pathname === "/login" ? css.active : ""}`}
            >
              Sign in
            </Link>
          </div>
          <div className={css.lineContainer}>
            <span className={css.line}></span>
            <span className={pathname === "/registration" ? css.lineActive : css.line}></span>
            <span className={css.line}></span>
            <span className={pathname === "/login" ? css.lineActive : css.line}></span>
            <span className={css.line}></span>
          </div>

          <div className={css.field}>
            <p className={css.label}>
              <span className={css.required}>*</span>
              Login
            </p>
            <input
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
              required
              placeholder="Input login"
              className={css.input}
            />
          </div>

          <div className={css.field}>
            <p className={css.label}>
              <span className={css.required}>*</span>
              Password
            </p>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Input password"
              className={css.input}
            />
          </div>

          {error && <p className={css.error}>{error}</p>}

          <button
            type="submit"
            className={`${css.button} ${!error ? css.buttonMargin : ""}`}
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
