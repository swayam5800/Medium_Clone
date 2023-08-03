import React from "react";
import seedData from "./seedData.js";

const BlogList = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {seedData.map((blog) => (
          <li key={blog.id}>
            <a href={`/blog/${blog.id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
