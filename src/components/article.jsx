/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>--New Post !!!</span>;
};

const PostStatus = () => {
  return <span>--New Post!!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, tags: {props.tags.join(", ")},{" "}
        {/* {props.isNew ? "Baru!!!" : "Lama"} */}
        {/* {props.isNew && "Baru!!!"} */}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <PostStatus />}
        <div>Dibuat oleh: {user.username}</div>
      </small>
    </>
  );
}

export default Article;
