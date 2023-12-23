import { Link, useLoaderData } from "react-router-dom";

export default function Blog() {
  const externalPosts = useLoaderData();

  return (
    <>
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>
          <div>
            {index + 1}.<Link to={`/blog/${item.id}`}> {item.title}</Link>
          </div>
        </div>
      ))}
    </>
  );
}
