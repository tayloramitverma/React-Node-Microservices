import React from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = React.useState({});

  const fetchData = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log("posts", posts);

  const renderedPosts = Object.values(posts).map((post, index) => {
    console.log("post", post);
    return (
      <div key={index} className="card mb-3" style={{ width: "30%" }}>
        <div className="card-body">
          <h2>{post.title}</h2>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}
