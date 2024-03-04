function BlogPost({ post }) {
  return (
    <div className="ep-card">
      <h2>{post.postName}</h2>
      <p>{post.postText}</p>
    </div>
  )
}

export default BlogPost