import React from "react";
import NewsFeed from "./NewsFeed";
import About from "./About";

const Body = () => {
  return (
    <div className="body">
      <div className="container flex-col">
        <About />
        <NewsFeed />
      </div>
    </div>
  );
};

export default Body;
