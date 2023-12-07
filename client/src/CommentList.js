import React from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(res.data);
    };
    fetchData();
  }, [postId]);

  const renderedComments = comments.map((comment, index) => {
    return <li key={index}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
