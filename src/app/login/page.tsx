"use client";
import { signIn } from "next-auth/react";

export default async function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        click to log in
      </button>
    </div>
  );
}
