import Link from "next/link";
import Blog from "@/components/blog";
import { getAllArticles } from "../api/fetch";

export default function Articles({ articles }:any) {
  return (
    <>
      <Blog>
        {articles.map((article:any) => {
          return (
            <article key={article.id.toString()}>
              <h2>{article.title}</h2>
              <div>{article.body.slice(0, 100)}...</div>
              <Link href={`/blog/article/${article.id}`}><button>More</button></Link>
            </article>
          );
        })}
      </Blog>
    </>
  );
}

export async function getServerSideProps() {
  const articles = await getAllArticles();

  return {
    props: { articles }
  };
}
