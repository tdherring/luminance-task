import React from "react";
import NewsFeed from "./NewsFeed";
import About from "./About";
import Video from "./Video";

const Body = () => {
  return (
    <div className="body">
      <div className="container flex-col">
        <About />
        <NewsFeed />
        <Video />
      </div>
    </div>
  );
};

export default Body;
