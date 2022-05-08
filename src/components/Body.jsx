import React from "react";
import NewsFeed from "./NewsFeed";
import About from "./About";
import Video from "./Video";

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <About />
        <Video />
        <NewsFeed />
      </div>
    </div>
  );
};

export default Body;
