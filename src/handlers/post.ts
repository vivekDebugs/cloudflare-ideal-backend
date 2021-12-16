import { Request } from 'itty-router'
import Store from '../posts_store'

const Post = (req: Request): ResponseInit => {
  const posts = new Store()
  const postId = req?.params?.id
  const body = JSON.stringify(posts.find(postId!))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}

export default Post
