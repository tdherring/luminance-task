import React from "react";

const NewsFeedItem = ({ title, link, date }) => {
  return (
    <div className="news-feed-item">
      <span className="text-container">
        <p className="title">
          <a href={link}>
            <strong>{title}</strong>
          </a>
        </p>
        <p className="info">{date}</p>
      </span>
    </div>
  );
};

export default NewsFeedItem;
