import Link from "next/link";

export default function Navi() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </>
  );
}
