import React from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handelSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      onSubmit({ username, password });
    }
  };
  return (
    <div>
      <form method="post" onSubmit={handelSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            required
            id="username-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            required
            id="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!username || !password}
          id="login-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
