import React, { useEffect, useState } from "react";
import NewsFeedItem from "./NewsFeedItem";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = () => {
      fetch("https://cors-proxy.therring.workers.dev/?https://www.bing.com/news/search?q=depp&format=rss")
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, "text/xml");

          let allNews = Array.from(xml.querySelectorAll("item"));
          let top3 = allNews.slice(0, 3);

          for (let n of top3) {
            let newsObj = {};

            newsObj.title = n.querySelector("title").textContent;
            newsObj.link = n.querySelector("link").textContent;
            newsObj.description = n.querySelector("description").textContent;
            newsObj.date = n.querySelector("pubDate").textContent;
            newsObj.source = n.getElementsByTagName("News:Source")[0].textContent;

            setNews((news) => [...news, newsObj]);
          }
        })
        .catch((error) => console.log(error));
    };

    getNews();
  }, []);

  return (
    <>
      <div className="tile news-feed">
        <span className="title">News Feed</span>
        <br />
        <br />
        <div className="flex-col">{news.length > 0 && news.map((n) => <NewsFeedItem key={n.title} title={n.title} link={n.link} description={n.description} date={n.date} source={n.source} />)}</div>
      </div>
    </>
  );
};

export default NewsFeed;
