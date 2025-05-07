"use client";

import { useState } from "react";
import { register } from "../lib/register";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import css from "./registration.module.css";

const RegisterPage = () => {
  const pathname = usePathname();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return;
    }

    const success = await register({ login, password });

    if (success) {
      router.push("/");
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className={css.form}>
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
              className={`${css.link} ${
                pathname === "/registration" ? css.active : ""
              }`}
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className={`${css.link} ${
                pathname === "/login" ? css.active : ""
              }`}
            >
              Sign in
            </Link>
          </div>

          <div className={css.lineContainer}>
            <span className={css.line}></span>
            <span
              className={
                pathname === "/registration" ? css.lineActive : css.line
              }
            ></span>
            <span className={css.line}></span>
            <span
              className={pathname === "/login" ? css.lineActive : css.line}
            ></span>
            <span className={css.line}></span>
          </div>

          <div className={css.field}>
            <p className={css.label}>
              <span className={css.required}>*</span>
              Login
            </p>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Input password"
              className={css.input}
            />
          </div>

          <div className={`${css.field} ${!error ? css.marginBottom : ""}`}>
            <p className={css.label}>
              <span className={css.required}>*</span>
              Password confirmation
            </p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Input password again"
              className={css.input}
            />
          </div>

          {error && <p className={css.error}>{error}</p>}

          <button onClick={handleRegister} className={css.button}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
