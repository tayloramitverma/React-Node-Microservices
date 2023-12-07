import React from "react";
// import PostCreate from "./PostCreate";
// import PostList from "./PostList";
// import LoginForm from "./LoginForm";
// import UserTable from "./UserTable";
// import AutoComplete from "./AutoComplete";
// import ImageRead from "./ImageRead";
import Button from "./CustomHOC";

export default function App() {
  return (
    <div className="container">
      {/* <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList /> */}

      {/* <LoginForm onSubmit={(e) => console.log(e)} />
      <UserTable /> */}

      {/* <AutoComplete /> */}
      {/* <ImageRead /> */}
      <Button incoming={"from button"}/>
    </div>
  );
}
