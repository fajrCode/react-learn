import postData from "../post.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

export default function Homepage() {
  const [post, setPost] = useState(postData);
  const [totalPosts, setTotalPosts] = useState(0);

  const searching = (value) => {
    const filterPost = postData.filter((item) => item.title.includes(value));
    setPost(filterPost);
    setTotalPosts(filterPost.length);
  };

  // useEffect(() => {
  //   console.log("ada post baru");
  // }, [post]);

  return (
    <>
      <h1>Simple blog</h1>
      <Search onSearch={searching} totalPosts={totalPosts} />
      {post.map((props, index) => (
        <Article key={index} {...props} />
      ))}
      <hr />

      {/* {post.map(({ title, tags, date }, index) => (
        // <Article
        //   key={title}
        //   title={title}
        //   date={date}
        //   tags={tags}
        // />
        <Article key={index} {...{ title, tags, date }} />
      ))} */}
    </>
  );
}
