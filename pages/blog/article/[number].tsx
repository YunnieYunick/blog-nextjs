import Blog from '@/components/blog';
import styles from '@/styles/Blog.module.css'
import { useRouter } from "next/router";
import { getArticle } from "@/pages/api/fetch";

export default function Number({ article }:any) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Blog title={article.title} desc={article.body.slice(0, 20)}>
        <article className={styles.article}>
          <h1 className={styles.article_title}>{article.title}</h1>
          <div className={styles.article_attr}>
            <a href="/category">category</a>
            <a href="/tag">tag</a>
          </div>
          <div className={styles.article_body}>
            <p>{article.body}</p>
          </div>
        </article>
        <div className="btn tac">
          <button onClick={goBack}>Back</button>
        </div>
      </Blog>
    </>
  );
}

export async function getServerSideProps(context:any) {
  const article = await getArticle(context.query.number);
  
  return {
    props: { article }
  }
}
