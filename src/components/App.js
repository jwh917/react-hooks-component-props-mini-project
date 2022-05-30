import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header key={blogData.name} name={blogData.name}/>
      <About key={blogData.about} imageSrc={blogData.image} text={blogData.about}/>
      <ArticleList key={blogData.posts} posts={blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
