import React from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
