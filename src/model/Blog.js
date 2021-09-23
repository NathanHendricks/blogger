
export class Blog {
  constructor(blogData) {
    this.title = blogData.title
    this.body = blogData.body
    this.imgUrl = blogData.imgUrl
    this.creatorId = blogData.creatorId
    this.id = blogData.id
    this.creator = blogData.creator || {}
  }
}
