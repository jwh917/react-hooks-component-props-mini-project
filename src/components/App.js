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
      <h4>Blog Posts:</h4>
      <ArticleList key={blogData.posts} posts={blogData.posts}/>
    </div>
  );
}

export default App;
