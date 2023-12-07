import React from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [content, setContent] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Write Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}
