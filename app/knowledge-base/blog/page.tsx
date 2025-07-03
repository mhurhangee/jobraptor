import { allBlogs } from 'content-collections'

export default function Posts() {
  return (
    <ul>
      {allBlogs.map(blog => (
        <li key={blog._meta.path}>
          <a href={`/knowledge-base/blog/${blog._meta.path}`}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}
