"use client";

import styles from "./page.module.css";
import { getSession, SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Home = async () => {
  const { data: session, status } = useSession();

  if (status == "unauthenticated") {
    console.log("redirecting");
    redirect("/login");
  }

  return (
    <main className={styles.main}>
      <h1>Sample NextJS App</h1>
      <p>hello, my name is Arshan</p>
      <p>status: {status}</p>
      <pre className={styles.codeBlock}>{}</pre>
    </main>
  );
};

export default async function SessionWrapper() {
  const session = await getSession();
  return (
    <SessionProvider session={session}>
      <Home />
    </SessionProvider>
  );
}
