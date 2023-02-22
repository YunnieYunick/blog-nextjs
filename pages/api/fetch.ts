export const getAllArticles = async () => {
  const res = await fetch(new URL(`${process.env.API_URL}/v1/articles`))
  const articles = await res.json()
  return articles
}

export const getArticle = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.API_URL}/v1/articles/${id}`)
  )
  const article = await res.json()
  return article
}
