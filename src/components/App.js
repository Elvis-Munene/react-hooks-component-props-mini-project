import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import ArticleList  from "./ArticleList";
import About from "./About"



console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header data={blogData}/>
      <About image={blogData.image} about={blogData}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
