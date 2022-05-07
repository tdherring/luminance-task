import React from "react";
import NewsFeed from "./NewsFeed";
import About from "./About";
import Gallery from "./Gallery";

const Body = () => {
  return (
    <div className="main">
      <div className="container flex-row">
        <About />
        <NewsFeed />
        <Gallery />
      </div>
    </div>
  );
};

export default Body;
