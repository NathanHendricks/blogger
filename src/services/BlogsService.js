import { AppState } from '../AppState'
import { Blog } from '../model/Blog'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('getblogs', res)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async getBlog(id) {
    const res = await api.get('api/blogs/' + id)
    logger.log('getblog', res)
    AppState.blog = new Blog(res.data)
  }

  async createPost(data) {
    const res = await api.post('api/blogs/', data)
    AppState.blogs.unshift(new Blog(res.data))
  }

  async deleteBlog(blogId) {
    const res = await api.delete('api/blogs/' + blogId)
    logger.log('the delete', res)
    AppState.blogs = AppState.blogs.filter(b => b.id !== blogId)
  }
}

export const blogsService = new BlogsService()
