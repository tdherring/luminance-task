import React from "react";

const NewsFeedItem = ({ title, link, date, source, description }) => {
  return (
    <div className="news-feed-item">
      <span className="text-container">
        <div className="title">
          <a href={link}>{title}</a>
        </div>
        <div className="description">{description}</div>
        <hr />
        <div className="info">
          {source}, {date}
        </div>
      </span>
    </div>
  );
};

export default NewsFeedItem;
