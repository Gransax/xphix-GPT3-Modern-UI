import React from "react";
import "./article.css";

const Article = ({ title, date, image }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-img">
        <img src={image} alt="blog image" />
      </div>
      <div className="gpt3__article-container">
        <div className="gpt3__article-container__heading">
          <p>{date}</p>
          <h4>{title}</h4>
        </div>

        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
