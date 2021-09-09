const BASE_URL = '/api/posts/'

export async function index() {
  const posts: Response = await fetch(BASE_URL)
  return await posts.json()
}