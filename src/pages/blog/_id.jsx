import { useLoaderData } from "react-router-dom";

export default function SingelPost() {
  const post = useLoaderData();

  return (
    <>
      <div>
        <div>UserID: {post?.userId}</div>
        <div>ID: {post?.id}</div>
        <div>Title: {post?.title}</div>
        <div>Body: {post?.body}</div>
      </div>
    </>
  );
}
