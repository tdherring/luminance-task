import React from "react";

const NewsFeedItem = ({ title, link, date }) => {
  return (
    <div className="news-feed-item">
      <span className="text-container text-justified">
        <div className="title">
          <a href={link}>
            <strong>{title}</strong>
          </a>
        </div>
        <div className="info">{date}</div>
      </span>
    </div>
  );
};

export default NewsFeedItem;
