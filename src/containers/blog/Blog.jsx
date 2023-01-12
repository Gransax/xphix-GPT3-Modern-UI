import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content_groupA">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            image={blog01}
          />
        </div>

        <div className="gpt3__blog-content_groupB">
          <Article
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
            image={blog02}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
            image={blog03}
          />

          <Article
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
            image={blog04}
          />
          <Article
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
            image={blog05}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
