import post from "../post.json";
import Article from "../components/article";

export default function Homepage() {
  return (
    <>
      <h1>Simple blog</h1>
      {post.map((blog) => (
        <Article
          key={blog.title}
          title={blog.title}
          date={blog.date}
          tags={blog.tags}
        />
      ))}
    </>
  );
}
