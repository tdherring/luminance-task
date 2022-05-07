import React from "react";

const NewsFeedItem = ({ title, link, date }) => {
  return (
    <div className="news-feed-item">
      <span className="text-container text-justified">
        <div className="title">
          <a href={link}>{title}</a>
        </div>
        <hr />
        <div className="info">{date}</div>
      </span>
    </div>
  );
};

export default NewsFeedItem;
