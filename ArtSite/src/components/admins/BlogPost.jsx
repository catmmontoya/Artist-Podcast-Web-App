function BlogPost({ post }) {
  return (
    <div className="ep-card">
      <p>{post.postName}</p>
      <p>{post.postText}</p>
    </div>
  )
}

export default BlogPost