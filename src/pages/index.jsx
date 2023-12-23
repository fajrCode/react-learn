import postData from "../post.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

export default function Homepage() {
  const [post, setPost] = useState(postData);
  const searching = (value) => {
    const filterPost = postData.filter((item) => item.title.includes(value));
    setPost(filterPost);
  };
  return (
    <>
      <h1>Simple blog</h1>
      <Search onSearch={searching} />
      {post.map((props, index) => (
        <Article key={index} {...props} />
      ))}
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
