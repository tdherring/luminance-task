import React, { useEffect, useState } from "react";
import NewsFeedItem from "./NewsFeedItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = () => {
      fetch("https://api.allorigins.win/get?url=https://news.google.com/rss/search?q=depp&hl=en-GB&gl=GB&ceid=GB:en")
        .then((response) => response.json())
        .then((data) => {
          let rss = data.contents;

          const parser = new DOMParser();
          const xml = parser.parseFromString(rss, "text/xml");

          let allNews = Array.from(xml.querySelectorAll("item"));

          for (let n of allNews) {
            let newsObj = {};

            newsObj.title = n.querySelector("title").innerHTML;
            newsObj.link = n.querySelector("link").innerHTML;
            newsObj.date = n.querySelector("pubDate").innerHTML;

            setNews((news) => [...news, newsObj]);
          }
        })
        .catch((error) => console.log(error));
    };

    getNews();
  }, []);

  return (
    <div className="tile news-feed">
      <span className="title">
        <FontAwesomeIcon icon={faNewspaper} />
        &nbsp;News Feed
      </span>
      <div className="flex-col">{news.length > 0 && news.map((n) => <NewsFeedItem key={n.title} title={n.title} link={n.link} date={n.date} />)}</div>
    </div>
  );
};

export default NewsFeed;
