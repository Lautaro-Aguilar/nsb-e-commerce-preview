import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        This is the home page. You can edit it at <code>src/app/page.tsx</code>.
      </p>
      <Link href="/login">
        <p>Login</p>
      </Link>
    </main>
  );
}
