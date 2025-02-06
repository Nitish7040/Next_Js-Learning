import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Welcome to my next.js app !!!</h1>
    <p>This is the homepage !</p>
    <Link href="/about">Goto about</Link>
    </>
  );
}
